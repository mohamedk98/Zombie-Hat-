const jwt = require("jsonwebtoken");

const { userDataRepository } = require("../models/RedisRefreshToken");
const { redisClient } = require("../services/redisClient.service");
const { validateRefreshToken } = require("../services/token.service");

const refreshToken = async (req, res, next) => {
  const refreshToken = req.body.refreshToken;
  const hasExpiry = req.body.hasExpiry;
  let redisUser = null;
  const userCredentials = await validateRefreshToken(
    refreshToken,
    process.env.REFRESH_TOKEN
  );

  redisUser = await userDataRepository
    .search()
    .where("refreshToken")
    .equalTo(refreshToken)
    .returnAll();
    const redisUserData = redisUser[0]?.entityData;

  if (
    !refreshToken ||
    userCredentials == null ||
    Object.keys(redisUserData)?.length === 0 ||
    redisUser == undefined ||
    redisUser == null
  ) {
    res.sendStatus(401);
  } else {
 
    req.userId = redisUserData.userId;
    req.username = redisUserData.username;
    req.email = redisUserData.email;

    const newJwtToken = jwt.sign(
      {
        userId: redisUserData.userId,
        username: redisUserData.username,
        email: redisUserData.email,
      },
      process.env.TOKEN
    );

    await userDataRepository.save(redisUser[0]);
    //add expiry time to token of 7 days
    await redisClient.execute([
      "EXPIRE",
      `UserEnitity:${redisUser[0].entityId}`,
      7 * 24 * 60 * 60,
    ]);
    res
      .cookie("access_token", newJwtToken, {
        httpOnly: true,
        secure: false,
        //15 minutes token
        expires: hasExpiry ? new Date(Date.now() + 24 * 60 * 60 * 1000) : 0,
      })
      .send({
        refreshToken: redisUserData.refreshToken,
        hasExpiry: hasExpiry,
      });
  }
};

/**
 * a middleware to handle authentcation and authorization:
 * if the request cookies contain access_token cookies then
 * verify the hash itself and store the username and role of the user
 * or whatever the data that will be used in the request body and send
 * it on each request. that will achieve authorization
 */
const authentication = (req, res, next) => {
  const userToken = req.cookies.access_token;
  const TOKEN = process.env.TOKEN;
  if (!userToken) {
    return res.sendStatus(401);
  }

  try {
    const data = jwt.verify(userToken, TOKEN);
    req.userId = data.userId;
    req.email = data.email;
    req.username = data.username;
    next();
  } catch {
    return res.sendStatus(401);
  }
};

module.exports = { authentication, refreshToken };
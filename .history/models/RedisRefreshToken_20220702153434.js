const { Entity, Schema, Repository } = require("redis-om");
const {
  redisClient,
  connectToRedis,
} = require("../services/redisClient.service");

class UserEnitity extends Entity {}
const redisUserSchema = new Schema(
  UserEnitity,
  {
    userId: { type: "string" },
    username: { type: "string" },
    email: { type: "string" },
    refreshToken: { type: "string" },
  },
  { dataStructure: "JSON" }
);
const userDataRepository = new Repository(redisUserSchema, redisClient);

const updateRedisRefreshTokensIndex = async () => {
  await userDataRepository.dropIndex();
  await userDataRepository.createIndex();
};



module.exports = { redisUserSchema, userDataRepository ,updateRedisRefreshTokensIndex};
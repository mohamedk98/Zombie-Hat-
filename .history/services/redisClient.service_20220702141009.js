const { Client } = require("redis-om");


const redisClient = new Client();
//Connect to redis database
const connectToRedis =  () => {
  if (!redisClient.isOpen) {
     redisClient
      .open(process.env.REDIS_HOST)
      .then(() => {
        console.log("Redis Database Connected");
      })
      .catch((error) => {
        console.log(error);
      });
  }
};



module.exports = { connectToRedis, redisClient };

const { Entity, Schema } = require("redis-om");

class UserEnitity extends Entity {}
const redisUserSchema = new Schema(UserEnitity, {
  userId: { type: "string",indexed:true },
  username: { type: "string" },
  email: { type: "string" },
  refreshToken: { type: "string" },
});

module.exports = redisUserSchema;

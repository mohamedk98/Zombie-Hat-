const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  postId: { type: String, required: true },
  userId: { type: String, required: true },
  creatorName: { type: String, required: true },
  createdAt: { type: String, required: true },
  content: { type: String, required: true },
  media: [],
  reactions: [],
  comments: [
    {
      userId: { type: mongoose.Types.ObjectId, ref: "User" },
      commentDate: String,
      content: String,
      reply: [
        {
          userId: { type: mongoose.Types.ObjectId, ref: "User" },
          commentDate: String,
          content: String,
        },
      ],
      reactions: [],
      date: String,
    },
  ],
  visiability: String,
});

module.exports = mongoose.model("Post", postSchema);

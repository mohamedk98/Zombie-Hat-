const postsApi = require("../datasources/postsApi");
const User = require("../models/User");
const crypto = require("crypto");

const createPost = async (req, res) => {
  const content = req.body.content;
  const images = req.files;
  const userId = req.userId;
  const visiability = req.body.visiability;
  const postId = crypto.randomBytes(32).toString("hex");
  const createdAt = new Date().toISOString();

  let media = [];

  for (let image of images) {
    media.push(image.path);
  }

  const userData = await User.findOne({ userId: userId }, "firstName lastName");
  const creatorName = `${userData.firstName} ${userData.lastName}`;

  const postData = {
    postId,
    userId,
    creatorName,
    createdAt,
    content,
    media,
    visiability,
  };
  postsApi
    .createPost(postData)
    .then((response) => {
      res.send(response.message);
    })
    .catch((error) => {
      res.status(error.httpStatusCode).send(error.message);
    });
};

const deletePost = async (req, res) => {
  const postId = req.params.postId;
  const userId = req.userId;

  const postData = await postsApi.getPost(postId);
  if (!postData) {
    res.status(404).send({ message: "Post is not found" });
  }

  if (postData.userId !== userId) {
    res.status()
  }
};

module.exports = { createPost, deletePost };

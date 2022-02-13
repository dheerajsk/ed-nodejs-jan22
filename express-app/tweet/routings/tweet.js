
const express = require("express");
const controller = require("../controllers/tweet");

const router = express.Router();

router.post("/", controller.postTweet);

module.exports = router;
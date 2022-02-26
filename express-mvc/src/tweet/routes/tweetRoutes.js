
const express = require("express");
const controller = require("../controllers/tweetController");
const sessionAuth = require("../../shared/middlewares/session-auth");

const router = express.Router();

// tweet/
router.get("/",sessionAuth, controller.getTweets);

module.exports = router;
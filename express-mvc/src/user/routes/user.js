
const express = require("express");
const controller = require("../controllers/userController");

const router = express.Router();

// Configure routes.

router.get("/register", controller.getRegisterView);

module.exports = router;
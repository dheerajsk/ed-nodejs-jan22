
const express = require("express");
const controller = require("../controllers/userController");

const router = express.Router();

// Configure routes.

router.get("/register", controller.getRegisterView);
router.post("/register", controller.register)

module.exports = router;
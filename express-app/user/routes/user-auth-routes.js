// api/user/auth

// Step 1: Import express.
const express = require("express");
const userAuthController = require("../controllers/user-auth-controller");

// Step 2: Create router
const router = express.Router();

// Step 3: Configure routes

router.post("/register", userAuthController.register);
router.post("/login", userAuthController.login);


module.exports = router;
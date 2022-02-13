// api/user

// Step 1: Import Express
const express = require("express");
const userController = require("../controllers/user");

// Step 2: Create router
const router = express.Router();

// Step 3: Configure Routes
router.put("/", userController.update);

module.exports = router;
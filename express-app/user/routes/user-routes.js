// api/user

// Step 1: Import Express
const express = require("express");
const userController = require("../controllers/user");

// Step 2: Create router
const router = express.Router();

// Step 3: Configure Routes
router.put("/", userController.update);
// api/user/id
router.get("/:id", userController.getByID);
router.delete("/:id", userController.delete);

module.exports = router;
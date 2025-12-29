const express = require("express");
const router = express.Router();

const {loginUser, signupUser} = require("../controllers/userControllers")

// Login user
router.post("/login", loginUser)

// Sign Up user
router.post("/signup", signupUser)


module.exports = router
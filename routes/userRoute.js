const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const { verifyRegister } = require("../middleware");

router.post(
  "/register",
  [verifyRegister.checkUserNameOrEmail, verifyRegister.checkRole],
  register
);

router.post("/login", login);
module.exports = router;
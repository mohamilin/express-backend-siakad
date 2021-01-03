const express = require('express');
const router = express.Router();
const { authJwt } = require("../middleware");
const {
  allUserAccess,
  userAccess,
  moderatorAccess,
  adminAccess,
} = require("../controllers/userController");
const { viewUser } = require("../controllers/authController");

// versi 1
router.get("/data/user", viewUser);
router.get("/all", allUserAccess);
router.get("/user", [authJwt.checkToken], userAccess);
router.get(
  "/mod",
  [authJwt.checkToken, authJwt.checkModerator],
  moderatorAccess
);
router.get("/admin", [authJwt.checkToken, authJwt.checkAdmin], adminAccess);
module.exports = router;

const express = require("express");
const { createUser, login, getList } = require("../controller/user");
const { verifyToken } = require("../middlewares");
const router = express.Router();

router.post("/signup", createUser);
router.post("/login", login);
router.get("/list", verifyToken, getList);

module.exports = router;

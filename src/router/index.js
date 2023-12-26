const express = require("express");

const emojis = require("./emojis");
const user = require("./user");
const list = require("./list");
const task = require("./task");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/user", user);
router.use("/emojis", emojis);
router.use("/list", list);
router.use("/task", task);

module.exports = router;

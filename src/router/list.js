const express = require("express");
const { createList, deleteList } = require("../controller/list");
const { verifyToken } = require("../middlewares");

const router = express.Router();

router.post("/create", verifyToken, createList);
router.delete("/:id", verifyToken, deleteList);

module.exports = router;

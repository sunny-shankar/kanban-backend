const express = require("express");
const {
  createTask,
  deleteTask,
  updateTask,
  getTaskByList,
} = require("../controller/task");
const { verifyToken } = require("../middlewares");

const router = express.Router();

router.post("/create", verifyToken, createTask);
router.delete("/:id", verifyToken, deleteTask);
router.put("/:id", verifyToken, updateTask);
router.get("/list/:id", verifyToken, getTaskByList);

module.exports = router;

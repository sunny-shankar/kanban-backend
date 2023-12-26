const { models } = require("../models");

const createTask = async (req, res) => {
  try {
    const { name, list_id } = req.body;
    const user = req.user;
    console.log({ user });
    const list = await models.task.create({
      name,
      list_id,
    });
    res.json({ success: true, message: "task created", data: list });
  } catch (err) {
    console.log({ error: err.message });
    res.json({ success: false, message: err.message, data: {} });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await models.task.destroy({
      where: {
        id,
      },
    });
    res.json({ success: true, message: "task deleted", data: {} });
  } catch (err) {
    console.log({ error: err.message });
    res.json({ success: false, message: err.message, data: {} });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await models.task.update(data, {
      where: {
        id,
      },
    });
    res.json({ success: true, message: "task updated", data: {} });
  } catch (err) {
    console.log({ error: err.message });
    res.json({ success: false, message: err.message, data: {} });
  }
};

const getTaskByList = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await models.task.findAll({
      where: {
        list_id: id,
      },
    });
    res.json({ success: true, message: "task fetched", data: task });
  } catch (err) {
    console.log({ error: err.message });
    res.json({ success: false, message: err.message, data: {} });
  }
};

module.exports = { createTask, deleteTask, updateTask, getTaskByList };

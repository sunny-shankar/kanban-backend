const { models } = require("../models");

const createList = async (req, res) => {
  try {
    const { name } = req.body;
    const user = req.user;
    console.log({ user });
    const list = await models.list.create({
      name,
      user_id: user.id,
    });
    res.json({ success: true, message: "list created", data: list });
  } catch (err) {
    console.log({ error: err.message });
    res.json({ success: false, message: err.message, data: {} });
  }
};

const deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    await models.list.destroy({
      where: {
        id,
      },
    });
    res.json({ success: true, message: "list deleted", data: {} });
  } catch (err) {
    console.log({ error: err.message });
    res.json({ success: false, message: err.message, data: {} });
  }
};

module.exports = { createList, deleteList };

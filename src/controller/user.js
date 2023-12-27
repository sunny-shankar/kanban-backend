const { models } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;
    console.log({ data: req.body });
    const { passowrd, ...user } = await models.user.create({
      mail_id: email,
      firstname: firstName,
      lastname: lastName,
      password: await bcrypt.hash(password, 10),
    });

    res.json({ success: true, message: "user created", data: {} });
  } catch (err) {
    console.log({ error: err.message });
    res.json({ success: false, message: err.message, data: {} });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await models.user.findOne({
      where: {
        mail_id: email,
      },
    });
    if (user) {
      const isVerified = await bcrypt.compare(password, user.password);
      if (isVerified) {
        let token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });
        return res.status(201).send({
          success: true,
          message: "login successfull",
          data: {
            access_token: token,
          },
        });
      }
    }
    return res.status(401).send({
      success: false,
      message: "unauthorized",
      data: {},
    });
  } catch (err) {
    console.log({ error: err.message });
    res.json({ success: false, message: err.message, data: {} });
  }
};

const getList = async (req, res) => {
  try {
    console.log(req.user);
    const lists = await models.list.findAll({
      where: {
        user_id: req.user?.id,
      },
    });
    res.json({ success: true, message: "user list", data: lists });
  } catch (err) {
    console.log({ error: err.message });
    res.json({ success: false, message: err.message, data: {} });
  }
};
module.exports = { createUser, login, getList };

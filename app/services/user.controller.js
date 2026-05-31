// controllers/user.controller.js

const userService = require("../services/user.service");

const createUser = async (req, res) => {
  try {
    const result = await userService.createUser(req.body);

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createUser,
};
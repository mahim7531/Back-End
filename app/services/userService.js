// services/user.service.js

const User = require("../models/user.model");


// Create User
const createUserService = async (userData) => {
  const user = await User.create(userData);

  return user;
};


// Get All Users
const getUsersService = async () => {
  const users = await User.find();

  return users;
};


// Get Single User
const getSingleUserService = async (id) => {
  const user = await User.findById(id);

  return user;
};


// Update User
const updateUserService = async (id, data) => {
  const updatedUser = await User.findByIdAndUpdate(id, data, {
    new: true,
  });

  return updatedUser;
};


// Delete User
const deleteUserService = async (id) => {
  const deletedUser = await User.findByIdAndDelete(id);

  return deletedUser;
};


module.exports = {
  createUserService,
  getUsersService,
  getSingleUserService,
  updateUserService,
  deleteUserService,
};
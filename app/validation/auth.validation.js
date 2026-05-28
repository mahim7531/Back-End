const Joi = require("joi");

const registerValidation = Joi.object({
  name: Joi.string().min(3).max(50).required(),

  email: Joi.string().email().required(),

  password: Joi.string().min(6).required(),

  phone: Joi.string().required(),
});

const loginValidation = Joi.object({
  email: Joi.string().email().required(),

  password: Joi.string().required(),
});

module.exports = {
  registerValidation,
  loginValidation,
};
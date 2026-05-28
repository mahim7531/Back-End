const Joi = require("joi");

const updateUserValidation = Joi.object({
  name: Joi.string().min(3).max(50),

  phone: Joi.string(),

  address: Joi.string(),

  profileImage: Joi.string(),
});

module.exports = {
  updateUserValidation,
};
const Joi = require("joi");

const createProductValidation = Joi.object({
  title: Joi.string().required(),

  description: Joi.string().required(),

  price: Joi.number().required(),

  stock: Joi.number().required(),

  category: Joi.string().required(),

  image: Joi.string().required(),
});

module.exports = {
  createProductValidation,
};
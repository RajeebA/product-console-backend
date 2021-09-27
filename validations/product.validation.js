const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createProduct = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    category: Joi.string().custom(objectId).required()
  })
};

module.exports = {
  createProduct
};

const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createCategory = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    parent: Joi.string()
  })
};

module.exports = {
  createCategory
};

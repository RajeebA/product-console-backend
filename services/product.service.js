const httpStatus = require("http-status");
const { Product } = require("../models");
const ApiError = require("../utils/ApiError");

/**
 * Create a product
 * @param {Object} categoryBody
 * @returns {Promise<Category>}
 */
const createProduct = async (userBody) => {
  const product = await Product.create(userBody);
  return product;
};
/**
 * get all products
 * @returns {Promise<products>}
 */
const listProduct = async () => {
  const products = await Product.find().populate("category");
  return products;
};
const listProductByCategory = async (category) => {
  console.log({ category });
  const products = await Product.find({ category: category });
  return products;
};

module.exports = {
  createProduct,
  listProduct,
  listProductByCategory
};

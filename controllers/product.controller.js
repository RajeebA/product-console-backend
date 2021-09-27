const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { productService } = require("../services");

const createProduct = catchAsync(async (req, res) => {
  const category = await productService.createProduct(req.body);
  res.status(httpStatus.CREATED).send(category);
});
const listProduct = catchAsync(async (req, res) => {
  const categories = await productService.listProduct(req.body);
  res.send(categories);
});

module.exports = {
  createProduct,
  listProduct
};

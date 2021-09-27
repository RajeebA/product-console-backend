const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { categoryService, productService } = require("../services");

const createCategory = catchAsync(async (req, res) => {
  const category = await categoryService.createCategory(req.body);
  res.status(httpStatus.CREATED).send(category);
});
const listCategories = catchAsync(async (req, res) => {
  const categories = await categoryService.listCategories(req.body);
  res.send(categories);
});
const listTopCategories = catchAsync(async (req, res) => {
  const categories = await categoryService.listTopCategories(req.body);
  res.send(categories);
});
const listCategoriesByparent = catchAsync(async (req, res) => {
  const categories = {
    categories: await categoryService.listCategoriesByparent(req.params.parent),
    products: await productService.listProductByCategory(req.params.parent)
  };
  res.send(categories);
});
module.exports = {
  createCategory,
  listCategories,
  listTopCategories,
  listCategoriesByparent
};

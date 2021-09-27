const httpStatus = require("http-status");
const { Category } = require("../models");
const ApiError = require("../utils/ApiError");

/**
 * Create a category
 * @param {Object} categoryBody
 * @returns {Promise<Category>}
 */
const createCategory = async (userBody) => {
  const category = await Category.create(userBody);
  return category;
};
/**
 * get all categories
 * @returns {Promise<Categoris>}
 */
const listCategories = async () => {
  const categories = await Category.find().populate("parent");
  return categories;
};
/**
 * get all categories without parent
 * @returns {Promise<Categoris>}
 */
const listTopCategories = async () => {
  const categories = await Category.find().lean();

  return categories
    .filter((c) => !c.parent)
    .map((item, i) => ({
      ...item,
      subcategories: [],
      products: []
    }));
};
/**
 * get all categories by parent category
 * @returns {Promise<Categoris>}
 */
const listCategoriesByparent = async (category) => {
  const categories = await Category.find({ parent: category });
  return categories;
};
module.exports = {
  createCategory,
  listCategories,
  listTopCategories,
  listCategoriesByparent
};

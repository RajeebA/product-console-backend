const express = require("express");
const validate = require("../../middlewares/validate");
const categoryValidation = require("../../validations/category.validation");
const categoryController = require("../../controllers/category.controller");

const router = express.Router();
router.get("/", categoryController.listCategories);
router.get("/top", categoryController.listTopCategories);
router.get("/childrens/:parent", categoryController.listCategoriesByparent);
router.post(
  "/",
  validate(categoryValidation.createCategory),
  categoryController.createCategory
);

module.exports = router;

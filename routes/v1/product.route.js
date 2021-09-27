const express = require("express");
const validate = require("../../middlewares/validate");
const productValidation = require("../../validations/product.validation");
const productController = require("../../controllers/product.controller");

const router = express.Router();
router.get("/", productController.listProduct);
router.post(
  "/",
  validate(productValidation.createProduct),
  productController.createProduct
);

module.exports = router;

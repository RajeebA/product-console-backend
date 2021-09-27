const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    category: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      index: true,
      ref: "Category"
    }
  },
  {
    timestamps: true
  }
);

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);

/**
 * @typedef Product
 */
const Product = mongoose.model("Product", productSchema);

module.exports = Product;

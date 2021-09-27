const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    parent: {
      type: mongoose.SchemaTypes.ObjectId,
      index: true,
      ref: "Category"
    }
  },
  {
    timestamps: true
  }
);

// add plugin that converts mongoose to json
categorySchema.plugin(toJSON);

/**
 * @typedef Category
 */
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;

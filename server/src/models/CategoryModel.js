const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);
const Category = mongoose.model("categories", DataSchema);
module.exports = Category;

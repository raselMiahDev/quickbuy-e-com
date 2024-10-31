const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Product = mongoose.model("products", DataSchema);
module.exports = Product;

const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    des: { type: String, required: true },
    size: { type: String },
    pQty: { type: String, required: true },
    addi_info: { type: String },
    image: [
      { type: String, required: true },
      { type: String, required: true },
      { type: String, required: true },
      { type: String, required: true },
    ],
    category_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { timestamps: true, versionKey: false }
);

const Product = mongoose.model("products", DataSchema);
module.exports = Product;

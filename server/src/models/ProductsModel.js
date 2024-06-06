const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    pro_name: { type: String, required: true },
    pro_price: { type: String, required: true },
    pro_image: { type: String },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Product = mongoose.model("products", DataSchema);
module.exports = Product;

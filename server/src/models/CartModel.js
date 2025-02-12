const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    qty: { type: String, required: true },
    size: { type: String },
  },
  { timestamps: true, versionKey: false }
);
const CartModel = mongoose.model("carts", DataSchema);
module.exports = CartModel;

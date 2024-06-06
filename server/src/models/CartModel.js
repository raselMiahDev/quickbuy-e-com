const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    productID: { type: mongoose.Schema.Types.ObjectId, required: true },
    qty: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const CartModel = mongoose.model("carts", DataSchema);
module.exports = CartModel;

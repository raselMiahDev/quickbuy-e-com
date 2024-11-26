const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    status: { type: String, required: true },
    total_amount: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const OrderModel = mongoose.model("orders", DataSchema);
module.exports = OrderModel;

const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    long_des: { type: String, required: true },
    rating: { type: String },
    feedback: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const ProductTab = mongoose.model("productTab", DataSchema);
module.exports = ProductTab;

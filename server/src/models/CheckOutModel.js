const mongoose = require("mongoose");

const DataModel = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    zip: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    productId: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const CheckOut = mongoose.model("check-out", DataModel);

module.exports = CheckOut;

const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    division: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    post_code: { type: String },
    user_id: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true, versionKey: false }
);

const UserProfile = mongoose.model("Users", DataSchema);
module.exports = UserProfile;

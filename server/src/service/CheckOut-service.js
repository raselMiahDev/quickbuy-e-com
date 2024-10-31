const CheckOutModel = require("../models/CheckOutModel");
const CheckOutService = async (req) => {
  try {
    const { fullName, phoneNumber, email, zip, city, address } = req.body;
    const productId = localStorage.getItem("products");

    const createOrder = await CheckOutModel.create(
      fullName,
      phoneNumber,
      email,
      zip,
      city,
      address,
      productId
    );

    return createOrder;
  } catch (e) {
    return { message: "Something went wrong" };
  }
};
module.exports = CheckOutService;

const { CheckOutService } = require("../service/CheckOut-service");

const CheckOut = async (req, res) => {
  const result = await CheckOutService(req);
  res
    .status(200)
    .json({ status: true, message: "Product will orderd", result: result });
};

module.exports = {
  CheckOut,
};

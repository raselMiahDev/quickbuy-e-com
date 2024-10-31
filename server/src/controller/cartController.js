const { addToCartService } = require("../service/CartService");

const addToCart = async (req, res) => {
  const result = await addToCartService(req, res);
  res
    .status(200)
    .json({ status: true, message: "Product added to cart", result: result });
};

module.exports = {
  addToCart,
};

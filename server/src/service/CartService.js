const CartModel = require("../models/CartModel");

const addToCartService = async (req, res) => {
  try {
    const product_id = req.params.id;
    const { qty } = req.body;

    //check product already in cart
    const alreadyCart = await CartModel.findOne({ product_id });
    if (alreadyCart) {
      res.status(200).json({ status: false, message: "Already Added" });
      return false;
    }

    let data = await CartModel.create({ product_id, qty });
    return data;
  } catch (error) {
    res.status(200).json({ status: false, message: "Somethong went wrong" });
  }
};

module.exports = {
  addToCartService,
};

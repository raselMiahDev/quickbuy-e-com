import { addToCartService } from "../service/CartService";

export const addToCart = async (req, res) => {
  const result = await addToCartService(req, res);
  res
    .status(200)
    .json({ status: true, message: "Product added to cart", result: result });
};

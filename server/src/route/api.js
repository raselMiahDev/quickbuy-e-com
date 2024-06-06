const router = require("express").Router();
import { addToCart } from "./../controller/cartController";

router.post("/add-to-cart", addToCart);

module.exports = router;

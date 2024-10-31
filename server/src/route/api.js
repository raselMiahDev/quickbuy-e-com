const router = require("express").Router();
const { addToCart } = require("./../controller/cartController");
const { CheckOut } = require("../controller/CheckOutController");

router.post("/add-to-cart", addToCart);
router.post("/place-order", CheckOut);

module.exports = router;

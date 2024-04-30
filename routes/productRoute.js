const { Router } = require("express");
const {
  getAllProducts,
  createProduct,
} = require("../controllers/productController");
const router = Router();

router.route("/").get(getAllProducts).post(createProduct);

module.exports = router;

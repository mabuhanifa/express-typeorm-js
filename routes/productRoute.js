const { Router } = require("express");
const {
  getAllProducts,
  createProduct,
  updateProductStatus,
} = require("../controllers/productController");
const router = Router();

router.route("/").get(getAllProducts).post(createProduct);

router.route("/status").post(updateProductStatus);

module.exports = router;

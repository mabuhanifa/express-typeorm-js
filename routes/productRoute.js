const { Router } = require("express");
const {
  getAllProducts,
  createProduct,
  updateProductStatus,
  getSingleProduct,
} = require("../controllers/productController");
const router = Router();

router.route("/").get(getAllProducts).post(createProduct);

router.route("/:productId").get(getSingleProduct);

router.route("/status").post(updateProductStatus);

module.exports = router;

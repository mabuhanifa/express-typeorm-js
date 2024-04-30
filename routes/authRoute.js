const { Router } = require("express");
const { login } = require("../controllers/authController");
const router = Router();

router.route("/login").post(login);

module.exports = router;

const { Router } = require("express");
const { getAllUsers, createUser } = require("../controllers/userController");
const router = Router();

router.route("/").get(getAllUsers).post(createUser);

module.exports = router;

const { Router } = require("express");
const router = Router();

router.route("/").get(async (req, res) => {
  try {
    res.send({
      res: "product",
    });
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;

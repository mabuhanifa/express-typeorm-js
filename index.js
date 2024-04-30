const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.listen(port, (req, res) => {
  console.log(`App Running on PORT ${port}`);
});

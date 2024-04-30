const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const dataSource = require("./db/datasource");

app.use(express.json());
app.use(cors());

dataSource
  .initialize()
  .then(() => {
    console.log("DB connected");
  })
  .catch(function (error) {
    console.log("Error: ", error);
  });

app.listen(port, (req, res) => {
  console.log(`App Running on PORT ${port}`);
});

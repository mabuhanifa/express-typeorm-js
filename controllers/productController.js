const dataSource = require("../db/datasource");
const Product = require("../entities/Product");

const getAllProducts = async (req, res) => {
  try {
    res.send({
      res: "product",
    });
  } catch (error) {
    res.send(error.message);
  }
};

const createProduct = async (req, res) => {
  try {
    const {
      title,
      categories,
      description,
      price,
      rentPrice,
      rentOption,
      createdBy,
    } = req.body;

    const newProduct = await dataSource
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values({
        title: title,
        categories: categories,
        description: description,
        price: price,
        rentPrice: rentPrice,
        rentOption: rentOption,
        createdAt: new Date(),
        viewCount: 0,
        createdBy: createdBy,
      })
      .execute();

    res.json({ newProduct });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getAllProducts,
  createProduct,
};

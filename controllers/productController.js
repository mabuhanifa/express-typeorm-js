const dataSource = require("../db/datasource");
const Product = require("../entities/Product");
const ProductStatus = require("../entities/ProductStatus");

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

const updateProductStatus = async (req, res) => {
  try {
    const { productId, status, rentFrom, rentTo, userId } = req.body;

    const updatedProductStatus = await dataSource
      .createQueryBuilder()
      .insert()
      .into(ProductStatus)
      .values({
        productId: productId,
        status: status,
        rentFrom: rentFrom,
        rentTo: rentTo,
        userId: userId,
      })
      .execute();

    res.json({ updatedProductStatus });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProductStatus,
};

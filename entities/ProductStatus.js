const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "ProductStatus",
  tableName: "product_status",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    productId: {
      type: "int",
    },
    status: {
      type: "enum",
      enum: ["bought", "sold", "borrowed", "lent"],
    },
    rentFrom: {
      type: "date",
      nullable: true,
    },
    rentTo: {
      type: "date",
      nullable: true,
    },
    userId: {
      type: "int",
    },
  },
  relations: {
    product: {
      target: "Product",
      type: "many-to-one",
      joinColumn: true,
      onDelete: "CASCADE",
    },
    user: {
      target: "User",
      type: "many-to-one",
      joinColumn: true,
      onDelete: "CASCADE",
    },
  },
});

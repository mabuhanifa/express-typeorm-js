const User = require("../entities/User");
const dataSource = require("../db/datasource");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await dataSource
      .getRepository(User)
      .createQueryBuilder("user")
      .getMany();

    res.send({ allUsers });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getAllUsers,
};

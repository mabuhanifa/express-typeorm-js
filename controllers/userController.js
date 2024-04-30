const User = require("../entities/User");
const dataSource = require("../db/datasource");
const { getRepository } = require("typeorm");
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

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, address, email, phone, password } = req.body;

    const newUser = await dataSource
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({
        firstName: firstName,
        lastName: lastName,
        address: address,
        email: email,
        phone: phone,
        password: password,
      })
      .execute();

    res.json({ newUser });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
};

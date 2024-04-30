const User = require("../entities/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.send(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, address, email, phone, password } = req.body;

    res.json({ firstName, lastName, address, email, phone, password });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
};

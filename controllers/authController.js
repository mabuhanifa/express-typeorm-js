const dataSource = require("../db/datasource");
const User = require("../entities/User");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await dataSource
      .getRepository(User)
      .createQueryBuilder("user")
      .where("user.email = :email", { email: email })
      .getOne();

    if (!user.email) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res
      .status(200)
      .json({ message: "Login successful", user: { email: user.email } });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { login };

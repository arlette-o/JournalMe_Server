import UserModel from "../models/user.js";

export const createAccount = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, Number(12));

    await UserModel.create({
      email: email,
      username: username,
      password: hashedPassword,
    });

    return res.status(200).json("Success!");
  } catch (error) {
    res.status(404).json({ message: "failure to login" });
  }
};

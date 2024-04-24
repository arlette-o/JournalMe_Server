import UserModel from "../models/user.js";

export const loginAttempt = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.find({
      username: username,
    });

    if (!user) return res.status(400).json("Cannot find that username");

    const compare = await bcrypt.compare(password, user.password);

    if (!compare) return res.status(400).json("Incorrect username or password");

    return res.status(200).json("Success!");
  } catch (error) {
    res.status(404).json({ message: "failure to login" });
  }
};

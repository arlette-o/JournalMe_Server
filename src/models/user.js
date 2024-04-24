import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
});

const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;

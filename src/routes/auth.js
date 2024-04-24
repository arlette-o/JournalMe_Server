import express from "express";
import { loginAttempt } from "../controllers/login.js";
import { createAccount } from "../controllers/createAccount.js";
const authRouter = express.Router();

authRouter.post("/login", loginAttempt);
authRouter.post("/createAccount", createAccount);

export default authRouter;

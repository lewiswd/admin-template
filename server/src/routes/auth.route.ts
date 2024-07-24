import express from "express";

const authRouter = express.Router();

import { refreshToken, signIn } from "../controller";
import { validationRefreshToken, validationSignIn } from "../middlewares";

authRouter.post("/signin", validationSignIn, signIn);
authRouter.post("/refresh-token", validationRefreshToken, refreshToken);

export { authRouter };

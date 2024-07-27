import express from "express";

const authRouter = express.Router();

import { refreshToken, signIn, signOut } from "../controller";
import { validationRefreshToken, validationSignIn } from "../middlewares";

authRouter.post("/signin", validationSignIn, signIn);
authRouter.post("/signout", signOut);
authRouter.post("/refresh-token", validationRefreshToken, refreshToken);

export { authRouter };

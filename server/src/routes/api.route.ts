import { Application } from "express";

import { notFoundHandlerMiddleware } from "../middlewares";

import { authRouter } from "./auth.route";
import { profileRouter } from "./profile.route";

export const apiRoute = (app: Application) => {
    app.use("/api/v1/auth", authRouter);

    app.use("/api/v1/profile", profileRouter);

    app.use("*", notFoundHandlerMiddleware);
};

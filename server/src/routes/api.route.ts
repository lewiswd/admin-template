import { Application } from "express";

import { notFoundHandlerMiddleware } from "../middlewares";

import { authRouter } from "./auth.route";

export const apiRoute = (app: Application) => {
    app.use("/api/v1/auth", authRouter);

    app.use("*", notFoundHandlerMiddleware);
};

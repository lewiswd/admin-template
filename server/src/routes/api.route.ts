import { Application } from "express";

import { notFoundHandlerMiddleware } from "../middlewares";

export const apiRoute = (app: Application) => {
    app.use("*", notFoundHandlerMiddleware);
};

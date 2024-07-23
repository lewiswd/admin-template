import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

import { ApiErrors } from "../utils";

export const errorsHandlerMiddleware: ErrorRequestHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // TODO Error handling logic
    if (error instanceof ApiErrors) {
        return res.status(error.statusCode).json(error.serialize());
    }

    return res.status(500).json("Something bad happened!");
};

import { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../errors";

export const notFoundHandlerMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    next(new NotFoundError("Not found route api"));
};

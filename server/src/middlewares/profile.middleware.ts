import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

import { BadRequestError } from "../errors";
import { decodeToken, getPayloadToken } from "../utils";

export const validationGetProfile = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
        // TODO: If either token is missing, return a bad request error
        return next(
            new BadRequestError("Lỗi lấy hồ sơ người dùng trên hệ thống!")
        );
    }

    const decoded = decodeToken(token);
    const decodedPayload = getPayloadToken(decoded);

    if (id !== decodedPayload?.id) {
        // TODO: If id in token not equal id in param of api, return a bad request error
        return next(
            new BadRequestError("Lỗi lấy hồ sơ người dùng trên hệ thống!")
        );
    }

    next();
};

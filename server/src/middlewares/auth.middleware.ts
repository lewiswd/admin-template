import { NextFunction, Request, Response } from "express";

import { BadRequestError } from "../errors";
import { TSignInRequest, TUnknownObjectProps } from "../types";
import { isEmptyObject, isExpiredToken } from "../utils";

export const validationSignIn = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // TODO: Get payload data from request body
    const { email, password }: TSignInRequest = req.body;
    const errors: TUnknownObjectProps = {};

    // TODO: Define error if payload data is not valid
    if (email.length === 0) errors["email"] = "Bạn cần nhập email đăng nhập!";
    if (password.length === 0)
        errors["password"] = "Bạn cần nhập mật khẩu đăng nhập!";

    if (!isEmptyObject(errors)) {
        // TODO: If error return status false
        next(new BadRequestError("Đăng nhập thất bại!", errors));
    }

    // TODO: Continue task
    next();
};

export const validationRefreshToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    const refreshToken = req.cookies["refreshToken"];

    if (!token || !refreshToken) {
        // TODO: If either token is missing, return a bad request error
        next(new BadRequestError("Lỗi cập nhật access token!"));
    }

    // TODO: Check if the refresh token is expired
    const isExpired = isExpiredToken(refreshToken);

    if (isExpired) {
        // TODO: If the refresh token is expired, return a bad request error
        next(new BadRequestError("Lỗi cập nhật access token!"));
    }

    next();
};

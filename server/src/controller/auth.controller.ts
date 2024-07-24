import { NextFunction, Request, Response } from "express";
import moment from "moment";

import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from "../configs";
import { ApiError, NotFoundError } from "../errors";
import { getUserByEmailAndPassword } from "../services";
import { TProfileDto, TResponseData, TSignInRequest } from "../types";
import { cn, createToken, verifyToken } from "../utils";

export const signIn = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // TODO: Get payload data from request body
    const { email, password }: TSignInRequest = req.body;

    try {
        // TODO: Get user data from db
        const data = await getUserByEmailAndPassword(email, password);

        if (data === null) {
            // TODO: If user not found return status false
            return next(
                new NotFoundError("Email hoặc mật khẩu không chính xác!")
            );
        }

        // TODO: Sign access token and refresh token
        const accessToken = createToken(
            { id: data.id },
            JWT_ACCESS_SECRET,
            Math.floor(Date.now() / 1000) + 24 * 60 * 60
        ); // TODO: Set access token expiration for 1 day
        const refreshToken = createToken(
            { id: data.id },
            JWT_REFRESH_SECRET,
            Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60
        ); // TODO: Set access token expiration for 7 day

        // TODO: Set refresh token in cookie
        res.cookie("refreshToken", refreshToken, {
            path: "/",
            httpOnly: true,
            secure: req.secure || req.headers["x-forwarded-proto"] === "https",
            sameSite: "none",
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });

        // TODO: Define payload dto and response
        const payload: TProfileDto = {
            id: data.id,
            username: data.username,
            email: data.email,
            roleId: data.roleId,
            roleName: data.role.name,
            roleCode: data.role.code,
            userId: data.userId,
            fullName: data.user
                ? cn(data.user.firstName, data.user.lastName)
                : data.username,
            address: data.user?.address || "",
            phone: data.user?.phone || "",
            departmentId: data.user?.departmentId || null,
            departmentName: data.user?.department?.name || "",
            officeId: data.user?.officeId || null,
            officeName: data.user?.office?.name || "",
            birthday: data.user?.birthday
                ? moment(data.user.birthday).format("DD/MM/YYYY")
                : "",
            photoUrl: data.user?.photoUrl || "",
        };

        const response: TResponseData = {
            status: true,
            message: `chào mừng ${payload.fullName} đăng nhập thành công!`,
            data: {
                token: accessToken,
                payload,
            },
        };

        return res.status(200).json(response);
    } catch (err) {
        console.log(err);
        next(
            new ApiError(500, "Internal error", "Lỗi đăng nhập trên hệ thống!")
        );
    }
};

export const refreshToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // TODO: Get refresh token from cookie
    const refreshToken = req.cookies["refreshToken"];

    // TODO: Verify the refresh token
    const decoded = verifyToken(refreshToken, JWT_REFRESH_SECRET);

    // TODO: Sign new access token and refresh token
    const newAccessToken = createToken(
        { id: (decoded as any).id },
        JWT_ACCESS_SECRET,
        Math.floor(Date.now() / 1000) + 24 * 60 * 60
    ); // TODO: Set new access token expiration for 1 day

    const response: TResponseData = {
        status: true,
        message: "Lấy token mới thành công!",
        data: {
            token: newAccessToken,
        },
    };

    return res.status(200).json(response);
};

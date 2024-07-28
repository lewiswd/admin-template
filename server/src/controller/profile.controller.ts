import { NextFunction, Request, Response } from "express";
import moment from "moment";

import { ApiError, NotFoundError } from "../errors";
import { getUserById } from "../services";
import { TProfileDto, TResponseData } from "../types";
import { cn } from "../utils";

export const getProfileById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // TODO: Get id from request param
    const { id } = req.params;

    try {
        // TODO: Get user data from db
        const data = await getUserById(id);

        if (data === null) {
            // TODO: If user not found return status false
            return next(new NotFoundError("Người dùng không tồn tại!"));
        }

        // TODO: Define payload dto and response
        const payload: TProfileDto = {
            id: data.id,
            username: data.username,
            email: data.email,
            roleId: data.roleId,
            roleName: data.role.name,
            roleCode: data.role.code,
            rolePermission: data.role.permission,
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
            message: `Lấy hồ sơ người dùng thành công!`,
            data: payload,
        };

        return res.status(200).json(response);
    } catch (err) {
        console.log(err);
        next(
            new ApiError(
                500,
                "Internal error",
                "Lỗi lấy hồ sơ người dùng trên hệ thống!"
            )
        );
    }
};

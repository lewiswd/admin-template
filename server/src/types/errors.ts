import { TUnknownObjectProps } from "./object";

export type TErrorResponse = {
    // ? Trạng thái
    status: boolean;
    // ? Status Code
    statusCode: number;
    // ? Mô tả chi tiết
    description: string;
    // ? Thông điệp về lỗi
    message: string;
    errors: TUnknownObjectProps;
};

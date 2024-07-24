import { TUnknownObjectProps } from "./object";

export type TResponseData = {
    status: boolean;
    message: string;
    data: TUnknownObjectProps;
};

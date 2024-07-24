import { TUnknownObjectProps } from "types";

export const isEmptyObject = (obj: TUnknownObjectProps): boolean => {
    if (Object.keys(obj).length > 0) return false;
    return true;
};

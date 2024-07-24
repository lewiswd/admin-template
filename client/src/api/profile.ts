import { privateInstance } from "@/configs";

export const getProfileById = (id: string) => {
    return privateInstance.get(`/profile/${id}`);
};

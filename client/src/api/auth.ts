import { publicInstance } from "@/configs";
import { ChangePasswordRequest, SignInRequest } from "@/types";

export const signIn = (payload: SignInRequest) => {
    return publicInstance.post("/auth/signin", payload);
};

export const signOut = () => {
    return publicInstance.post("/auth/signout");
};

export const refreshToken = () => {
    return publicInstance.post("/auth/refresh-token");
};

export const changePassword = (payload: ChangePasswordRequest) => {
    return publicInstance.put(`/auth/change-password`, payload);
};

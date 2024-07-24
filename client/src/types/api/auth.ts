export type SignInRequest = {
    email: string;
    password: string;
};

export type ChangePasswordRequest = {
    id: string;
    password: string;
    newPassword: string;
};

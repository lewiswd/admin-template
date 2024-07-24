import { createContext, useContext } from "react";

import { ProfileDto } from "@/types";

export type AuthContextProps = {
    user: ProfileDto | null;
    updateUser: (data: ProfileDto | null) => void;
};

export const AuthContext = createContext<AuthContextProps>(
    {} as AuthContextProps
);

export const useAuth = () => {
    return useContext(AuthContext);
};

import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { Spinner } from "@nextui-org/react";
import { jwtDecode } from "jwt-decode";

import { getProfileById } from "@/api";
import { ProfileDto } from "@/types";

import { AuthContext, AuthContextProps } from "./context";

const AuthProvider = ({ children }: { children: ReactNode[] | ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<ProfileDto | null>(null);

    const getUser = useCallback(async () => {
        const token = localStorage.getItem("token") || "";

        if (token !== "") {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const decoded: any = jwtDecode(token);
            const res = await getProfileById(decoded.id);

            if (res) setUser(res.data as ProfileDto);
        }

        setLoading(false);
    }, []);

    const updateUser = useCallback((payload: ProfileDto | null) => {
        if (payload) {
            setUser((prev) =>
                prev != null ? { ...prev, ...payload } : payload
            );
        } else {
            setUser(payload);
        }
    }, []);

    const value: AuthContextProps = useMemo(
        () => ({
            user,
            updateUser,
        }),
        [user, updateUser]
    );

    useEffect(() => {
        getUser();
    }, [getUser]);

    return (
        <AuthContext.Provider value={value}>
            {loading && (
                <div className="w-screen h-screen flex items-center justify-center">
                    <Spinner color="success" size="lg" />
                </div>
            )}
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

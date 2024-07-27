import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/contexts";

export const AuthRoutes = () => {
    const { user } = useAuth();
    return user == null ? <Outlet /> : <Navigate to="/" />;
};

export const ProtectedRoutes = () => {
    const { user } = useAuth();
    return user != null ? <Outlet /> : <Navigate to="/auth/signin" />;
};

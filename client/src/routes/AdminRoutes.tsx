import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "@nextui-org/react";

import { MainWrapper, NotFound } from "@/layouts";
import {
    Category,
    Customer,
    Dashboard,
    Report,
    User,
    UserList,
    UserPermissions,
    UserRoles,
} from "@/pages";

const AdminRoutes = () => {
    return (
        <Suspense
            fallback={
                <div className="w-screen h-screen flex justify-center items-center">
                    <Spinner color="success" size="lg" />
                </div>
            }
        >
            <Routes>
                <Route>
                    <Route element={<MainWrapper />}>
                        {/* Dashboard */}
                        <Route path="/" element={<Dashboard />} />
                        {/* User */}
                        <Route path="/user" element={<User />} />
                        <Route path="/user/roles" element={<UserRoles />} />
                        <Route
                            path="/user/permissions"
                            element={<UserPermissions />}
                        />
                        <Route path="/user/list" element={<UserList />} />
                        {/* Customer */}
                        <Route path="/customer" element={<Customer />} />
                        {/* Category */}
                        <Route path="/category" element={<Category />} />
                        {/* Report */}
                        <Route path="/report" element={<Report />} />
                    </Route>
                </Route>
                <Route
                    path="*"
                    element={
                        <div className="h-screen">
                            <NotFound />
                        </div>
                    }
                />
            </Routes>
        </Suspense>
    );
};

export default AdminRoutes;

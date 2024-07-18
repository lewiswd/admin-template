import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Spinner } from "@nextui-org/react";

import { MainWrapper, NotFound } from "@/layouts";
import { Category, Customer, Dashboard, Report, User } from "@/pages";

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
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/customer" element={<Customer />} />
                        <Route path="/category" element={<Category />} />
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

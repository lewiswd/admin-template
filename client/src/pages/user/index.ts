import { lazy } from "react";

export const User = lazy(() => import("./User"));
export const UserList = lazy(() => import("./UserList"));
export const UserPermissions = lazy(() => import("./UserPermissions"));
export const UserRoles = lazy(() => import("./UserRoles"));

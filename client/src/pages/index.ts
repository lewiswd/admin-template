import { lazy } from "react";

export const Dashboard = lazy(() => import("./Dashboard"));

export * from "./category";
export * from "./customer";
export * from "./report";
export * from "./user";

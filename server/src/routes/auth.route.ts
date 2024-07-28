import express from "express";

const authRouter = express.Router();

import { refreshToken, signIn, signOut } from "../controller";
import {
    authorize,
    validationRefreshToken,
    validationRolePermission,
    validationSignIn,
} from "../middlewares";

// Auth routes
authRouter.post("/signin", validationSignIn, signIn);
authRouter.post("/signout", signOut);
authRouter.post("/refresh-token", validationRefreshToken, refreshToken);

// Management role routes
authRouter.get("/role", authorize);
authRouter.post("/role", authorize, validationRolePermission);
authRouter.put("/role/:id", authorize, validationRolePermission);
authRouter.delete("/role/:id", authorize, validationRolePermission);

// Management permission routes
authRouter.get("/permission", authorize);
authRouter.post("/permission", authorize, validationRolePermission);
authRouter.put("/permission/:id", authorize, validationRolePermission);
authRouter.delete("/permission/:id", authorize, validationRolePermission);

export { authRouter };

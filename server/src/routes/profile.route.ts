import express from "express";

const profileRouter = express.Router();

import { getProfileById } from "../controller";
import { validationGetProfile } from "../middlewares";

profileRouter.get("/:id", validationGetProfile, getProfileById);

export { profileRouter };

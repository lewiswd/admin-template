import express from "express";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import { errorsHandlerMiddleware } from "./middlewares";
import { apiRoute } from "./routes";

config();

const app = express();
const port = process.env.PORT || 9069;

// Middleware configuration
app.use(
    cors({
        origin: process.env.ORIGIN || "http://localhost:5173",
        credentials: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

apiRoute(app);

app.use(errorsHandlerMiddleware);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

import express from "express";
import clientRouter from "./clientRouter.js";
import apiRouter from "./api/v1/apiRouter.js";

const rootRouter = express.Router();

rootRouter.use("/api/v1", apiRouter);
rootRouter.use("/", clientRouter);

export default rootRouter;

import express from "express";
import clientRouter from "./clientRouter.js";
import apiRouter_v1 from "./api/v1/apiRouter.js";
import apiRouter_v2 from "./api/v2/apiRouter.js";

const rootRouter = express.Router();

rootRouter.use("/api/v1", apiRouter_v1);
rootRouter.use("/api/v2", apiRouter_v2);
rootRouter.use("/", clientRouter);

export default rootRouter;

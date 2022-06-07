import express from "express";
import clientRouter from "./clientRouter.js";
import apiRouter from "./api/v1/apiRouter.js";
import characterRouter from "./character/characterRouter.js";
import charIndexRouter from "./characters/charIndexRouter.js";

const rootRouter = express.Router();

rootRouter.use("/character", characterRouter);
rootRouter.use("/characters", charIndexRouter);
rootRouter.use("/api/v1", apiRouter);
rootRouter.use("/", clientRouter);

export default rootRouter;

import express from "express";
import { sourcebooks, names, backgrounds, races } from "../../../data/data.js";
import characterRouter from "./character/characterRouter.js";
import charIndexRouter from "./characters/charIndexRouter.js";

const apiRouter_v1 = express.Router();

apiRouter_v1.get("/sources", (req, res) => {
  res.status(200).send(JSON.stringify(sourcebooks)).end();
});

apiRouter_v1.get("/names", (req, res) => {
  res.status(200).send(JSON.stringify(names)).end();
});

apiRouter_v1.get("/backgrounds", (req, res) => {
  res.status(200).send(JSON.stringify(backgrounds)).end();
});

apiRouter_v1.get("/races", (req, res) => {
  res.status(200).send(JSON.stringify(races)).end();
});

apiRouter_v1.use("/character", characterRouter);
apiRouter_v1.use("/characters", charIndexRouter);


export default apiRouter_v1;

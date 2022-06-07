import express from "express";
import { sourcebooks, names, backgrounds, races } from "../../../data/data.js";

const apiRouter = express.Router();

apiRouter.get("/sources", (req, res) => {
  res.status(200).send(JSON.stringify(sourcebooks)).end();
});

apiRouter.get("/names", (req, res) => {
  res.status(200).send(JSON.stringify(names)).end();
});

apiRouter.get("/backgrounds", (req, res) => {
  res.status(200).send(JSON.stringify(backgrounds)).end();
});

apiRouter.get("/races", (req, res) => {
  res.status(200).send(JSON.stringify(races)).end();
});

export default apiRouter;

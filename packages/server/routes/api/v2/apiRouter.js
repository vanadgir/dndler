import express from "express";
import cors from "cors";
import { generateAll } from "../../../generators/generateAll.js";

const apiRouter = express.Router();

apiRouter.get("/nuddermin", cors(), (req, res) => {
  res.status(200).send(JSON.stringify(generateAll([]))).end();
});

export default apiRouter;
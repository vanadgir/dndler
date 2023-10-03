import express from "express";
import cors from "cors";
import { generateAll } from "../../../generators/generateAll.js";

const apiRouter_v2 = express.Router();

apiRouter_v2.get("/nuddermin", cors(), (req, res) => {
  res.status(200).send(JSON.stringify(generateAll([]))).end();
});

export default apiRouter_v2;
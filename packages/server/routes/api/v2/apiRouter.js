import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { generateAll } from "../../../generators/generateAll.js";
import { convertForFoundry } from "../../../interfaces/foundry.js";

const apiRouter_v2 = express.Router();

apiRouter_v2.use(cors()); // Enable CORS for all routes
apiRouter_v2.use(bodyParser.json());

apiRouter_v2.get("/nuddermin", (req, res) => {
  const generatedChar = generateAll([]);

  res.status(200).send(JSON.stringify(generatedChar)).end();
});

apiRouter_v2.get("/foundry", (req, res) => {
  const foundryChar = convertForFoundry(generateAll([]));

  res.status(200).send(JSON.stringify(foundryChar)).end();
});

apiRouter_v2.put("/options", (req, res) => {
  const options = req.body;
  const char = generateAll(options);

  res.status(200).send(JSON.stringify(char)).end();
});

export default apiRouter_v2;

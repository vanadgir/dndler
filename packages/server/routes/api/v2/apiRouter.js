import express from "express";
import cors from "cors";
import { generateAll } from "../../../generators/generateAll.js";

const apiRouter_v2 = express.Router();

apiRouter_v2.get("/nuddermin", cors(), (req, res) => {
  const generatedChar = generateAll([]);
  const keepKeys = ['name', 'background', 'class', 'race', 'stats'];

  const filteredCharacter = Object.fromEntries(
    Object.entries(generatedChar).filter(([key]) => keepKeys.includes(key))
  );

  res.status(200).send(JSON.stringify(filteredCharacter)).end();
});

export default apiRouter_v2;
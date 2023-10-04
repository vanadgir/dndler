import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { generateAll } from "../../../generators/generateAll.js";

const apiRouter_v2 = express.Router();

let items = [];
let counts = {};

apiRouter_v2.use(cors()); // Enable CORS for all routes
apiRouter_v2.use(bodyParser.json());

apiRouter_v2.get("/nuddermin", (req, res) => {
  const generatedChar = generateAll([]);
  const keepKeys = ['name', 'background', 'class', 'race', 'stats'];

  const filteredCharacter = Object.fromEntries(
    Object.entries(generatedChar).filter(([key]) => keepKeys.includes(key))
  );

  res.status(200).send(JSON.stringify(filteredCharacter)).end();
});

apiRouter_v2.put('/items', (req, res) => {
  items = req.body;

  res.json({ message: 'PUT request successful' });
});

apiRouter_v2.get('/items', (req, res) => {

  res.status(200).send(items).end();
});

apiRouter_v2.put('/items/counts', (req, res) => {
  counts = req.body;

  res.json({ message: 'PUT request successful' });
});

apiRouter_v2.get('/items/counts', (req, res) => {

  res.status(200).send(counts).end();
});

export default apiRouter_v2;
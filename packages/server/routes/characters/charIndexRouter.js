import express from "express";
import { generateAll } from "../../generators/generateAll.js";

const charIndexRouter = express.Router();

charIndexRouter.post("/", (req, res) => {
  const character = generateAll(req.body);
  res.status(201).send(JSON.stringify(character)).end();
});

export default charIndexRouter;

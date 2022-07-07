import express from "express";
import { sourcebooks, names, backgrounds, races } from "../../../db/seeders/SRD/data.js";
import Attribute from "../../../db/models/Attribute.js";
import Spell from "../../../db/models/Spell.js";
import Equipment from "../../../db/models/Equipment.js";
import Skill from "../../../db/models/Skill.js";
import characterRouter from "./character/characterRouter.js";
import charIndexRouter from "./characters/charIndexRouter.js";

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

apiRouter.get("/attributes", async (req, res) => {
  const attributes = await Attribute.query();
  res.status(200).send(JSON.stringify(attributes)).end();
})

apiRouter.get("/skills", async (req, res) => {
  const skills = await Skill.query();
  res.status(200).send(JSON.stringify(skills)).end();
})

apiRouter.get("/equipments", async (req, res) => {
  const equipments = await Equipment.query();
  res.status(200).send(JSON.stringify(equipments)).end();
})

apiRouter.get("/spells", async (req, res) => {
  const spells = await Spell.query();
  res.status(200).send(JSON.stringify(spells)).end();
})

apiRouter.use("/character", characterRouter);
apiRouter.use("/characters", charIndexRouter);

export default apiRouter;

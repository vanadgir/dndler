import express from "express";
import clientIndexPath from "../config/clientIndexPath.js";

const clientRouter = express.Router();

const clientRoutes = ["/", "/custom"];

clientRouter.get(clientRoutes, (req, res) => {
  res.sendFile(clientIndexPath());
});

export default clientRouter;

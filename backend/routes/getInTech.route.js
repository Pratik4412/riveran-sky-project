import express from "express";
import { bookRoom } from "../controllers/getInTech.controller.js";

const router = express.Router();

router.post("/get-in-tech", bookRoom);

export default router;

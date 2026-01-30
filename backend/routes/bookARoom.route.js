import express from "express";
import { sendBookingConfirmation } from "../controllers/bookARoom.controller.js";

const router = express.Router();

router.post("/book-a-room", sendBookingConfirmation);

export default router;

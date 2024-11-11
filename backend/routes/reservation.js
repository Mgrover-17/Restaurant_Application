import express from "express";
import sendReservation from "../controller/reservationControl.js"

const router = express.Router();

router.post('/send', sendReservation)

export default router
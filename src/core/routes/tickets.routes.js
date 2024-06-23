import express from "express";
const router = express.Router();
import {ticketsHistory} from '../controllers/tickets-controller.js';
router.get("/tickets-history", (req, res) =>
  ticketsHistory(req, res)
);

export default router;

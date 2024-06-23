import express from "express";
import path from "path";
const router = express.Router();
import { __dirname } from "../utils/path.utils.js";
router.get("/", ({ query }, res) => {
  res.render("index", {
    title: "Monitor de turnos",
    audioFile: path.join(__dirname, "assets/audio/notification.mp3"),
    query,
  });
});
router.get("/register-turn", (req, res) => {
  res.render("register-turn", {
    title: "Registrar turno",
  });
});
router.get("/tickets-history", (req, res) => {
  res.render("tickets-history", {
    title: "Historial de turnos",
  });
});

export default router;

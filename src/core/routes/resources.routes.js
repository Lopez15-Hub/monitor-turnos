import express from "express";
const router = express.Router();
import { RouteUtils } from "../utils/route.utils.js";

RouteUtils.renderAssetsRoute(router, "audio", "notification", "mp3");
RouteUtils.renderJsRoute(router, "main");
RouteUtils.renderJsRoute(router, "tickets");
RouteUtils.renderJsRoute(router, "tickets-history");
RouteUtils.renderJsRoute(router, "register-turn");
RouteUtils.renderJsRoute(router, "ticket-events-socket");
RouteUtils.renderJsRoute(router, "chat-events-socket");
RouteUtils.renderJsRoute(router, "chat-messages");

export default router;

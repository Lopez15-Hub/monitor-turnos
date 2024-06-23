//Server
import { config } from "dotenv";
import express from "express";
import { join } from "path";
import { createServer } from "node:http";
//Middlewares
import morgan from "morgan";
import cors from "cors";

config();
import resourcesRoutes from "./src/core/routes/resources.routes.js";
import staticRoutes from "./src/core/routes/static.routes.js";
import ticketsRoutes from "./src/core/routes/tickets.routes.js";
import MongooseService from "./src/core/services/mongoose.service.js";
import TicketEvents from "./src/core/socket/ticket-events.js";
import SupportChatEvents from "./src/core/socket/support-chat.events.js";
import { Socket } from "./src/core/adapters/socket.adapter.js";
const app = express();
const server = createServer(app);
//Static content
app.set("view engine", "ejs");
app.set("views", "./src/public/views");
//Middlewares
app.use(morgan("tiny"));
app.use(cors());
//Routes
app.use("/resources", resourcesRoutes);
app.use("/", staticRoutes);
app.use("/api/tickets", ticketsRoutes);

//Socket
const socket = new Socket(server);
const ticketSocket = new TicketEvents(socket);
const supportChatEvents = new SupportChatEvents(socket);
ticketSocket.init();
supportChatEvents.init();

MongooseService.connect();

server.listen(3000, () => console.log("Server online"));

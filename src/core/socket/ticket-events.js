import { Ticket } from "../models/ticket.model.js";

const startOfToday = new Date();
startOfToday.setHours(0, 0, 0, 0);
const endOfToday = new Date();
endOfToday.setHours(23, 59, 59, 999);

export default class TicketEvents {
  constructor(socket) {
    this.socket = socket;
  }
  init() {
    this.socket.on("connection", (socket) => {
      socket.on("mark-as-called", async ({ id }) => {
        await Ticket.findByIdAndUpdate(
          id,
          {
            called: true,
          },
          { new: true }
        );
      });
      socket.on("request-tickets", async () => {
        try {
          const tickets = await Ticket.find({
            createdAt: { $gte: startOfToday, $lt: endOfToday },
            called: false,
          });
          this.socket.emit(
            "addManyToQeue",
            tickets.map((result) => ({
              ticket: `${result.sector}${result.number}`,
              id: result._id,
            }))
          );
        } catch (error) {
          console.error("Error fetching tickets:", error);
        }
      });

      socket.on("message", async (newTicket) => {
        const tickets = await Ticket.find({
          called: false,
          createdAt: { $gte: startOfToday, $lt: endOfToday },
        });
        const result = await Ticket.create({
          number: tickets.length + 1,
          sector: newTicket,
          called: false,
        });
        this.socket.emit("addToQeue", {
          ticket: `${result.sector}${result.number}`,
          id: result._id,
        });
      });
    });
  }
}

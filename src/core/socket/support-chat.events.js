import GeminiService from "../services/gemini.service.js";

export default class SupportChatEvents {
  constructor(socket) {
    this.socket = socket;
  }
  init() {
    this.socket.on("connection", (socket) => {
      socket.on("request-welcome", async (message) => {
        const gemini = new GeminiService();
        this.socket.emit("writing", true);
        const response = await gemini.ask(
          `Saluda a la persona que está en el soporte y dile que sos el robot de ayuda del monitor de turnos y que estás acá para ayudarle`
        );

        this.socket.emit("support-response", {
          text: response,
          sender: "support",
        });
      });
      socket.on("ask-support", async (message) => {
        const gemini = new GeminiService();
        const response = await gemini.ask(message);
        this.socket.emit("support-response", {
          text: response,
          sender: "support",
        });
      });
    });
  }
}

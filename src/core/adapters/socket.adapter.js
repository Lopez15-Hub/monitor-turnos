import { Server } from "socket.io";

export class Socket {
  constructor(server) {
    this.io = new Server(server);
  }
  on(event, callback) {
    this.io.on(event, callback);
  }
  emit(event, data) {
    this.io.emit(event, data);
  }
}

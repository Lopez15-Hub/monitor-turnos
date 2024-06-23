let globalTickets = [];
let lastTicket = "";
const socket = io();
const currentTicket = document.getElementById("currentTicket");
const sectorTitle = document.getElementById("sector");
const sound = new Audio("http://localhost:3000/resources/audio/notification");
socket.emit("request-tickets");

const socket = io();
const currentTicket = document.getElementById("currentTicket");

const createTicket = (sector) => {
  socket.emit("message", sector);
  showThanks();
  setTimeout(() => window.location.reload(), 5000);
};
const showThanks = () => {
  document.getElementById("container").innerHTML = `
        <div class="container mx-auto my-auto w-full h-full">
           <h1 class="text-4xl my-4 text-center">Turno registrado exitosamente</h1>
           <h2 class="text-2xl my-4 text-center">Gracias por utilizar nuestros servicios</h2>

        </div>

        `;
};

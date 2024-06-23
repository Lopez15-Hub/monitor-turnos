const renderTickets = () => {
  let currentTickets = [];
  const queueContainer = document.getElementById("qeue");
  queueContainer.innerHTML = "";
  if (globalTickets.length > 3) {
    currentTickets = globalTickets.slice(globalTickets.length - 3);
  } else {
    currentTickets = globalTickets.slice(0, 3);
  }

  currentTickets.forEach(({ ticket }) => {
    const ticketContainer = document.createElement("div");
    ticketContainer.id = ticket;
    ticketContainer.className = "w-60 border";
    ticketContainer.innerHTML = `
      <div class="border shadow-sm rounded-xl my-4 p-4 mx-2">
        <h1 class="text-3xl">${ticket}</h1>
      </div>`;
    queueContainer.insertBefore(ticketContainer, queueContainer.firstChild);
  });
};
const next = async (sector = "") => {
  let nextTicket = "";
  if (!globalTickets.length) {
    return window.alert("No hay turnos disponibles");
  } else {
    if (sector.length) {
      nextTicket = globalTickets.find(
        (current) =>
          current.ticket[0] === sector && current.ticket !== nextTicket.ticket
      );
      if (!nextTicket) {
        return window.alert(
          `No se encontraron turnos para el sector ${getSector(sector)}`
        );
      }
    } else {
      nextTicket = globalTickets[0]; 
    }
    if (nextTicket) {
      changeDisplayTurn(nextTicket.ticket);
      const currentNode = document.getElementById(nextTicket.ticket);
      sectorTitle.innerHTML = `${getSector(nextTicket.ticket)}`;
      if (currentNode) currentNode.remove();
      globalTickets = globalTickets.filter(
        (ticket) => ticket.ticket !== nextTicket.ticket
      ); 
      socket.emit("mark-as-called", nextTicket);
      await sound.play();
    }
  }
};

const getSector = (ticket) => {
  const sector = ticket[0];
  if (sector == "A") return "Laboratorio";
  if (sector == "B") return "Clínica";
  if (sector == "C") return "Internación";
};

const changeDisplayTurn = (nextTicket) =>
  (currentTicket.innerHTML = globalTickets.length
    ? `<div><h3 class="text-3xl">Siguiente Turno</h3><p> ${nextTicket}</p></div>`
    : "Sin turnos");

changeDisplayTurn("");

if (!globalTickets.length) {
  sectorTitle.innerHTML = `El sector aparecerá cuando ingrese un ticket`;
}

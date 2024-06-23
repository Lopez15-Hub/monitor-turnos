
socket.on("addManyToQeue", (tickets) => {
  const newTickets = tickets.sort((a, b) => (a[0] > b[0] ? -1 : 1));
  globalTickets = newTickets;
  renderTickets();
});
socket.on("addToQeue", (ticket) => {
  if (!globalTickets.includes(ticket)) {
    const newTickets = [...globalTickets, ticket]
      .sort((a, b) => (a[0] > b[0] ? 1 : -1))
      .reverse();
    globalTickets = newTickets;
    renderTickets();
  }
});


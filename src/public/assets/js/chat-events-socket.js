socket.on("support-response", (message) => {
  //   const newTickets = tickets.sort((a, b) => (a[0] > b[0] ? -1 : 1));
  console.log({ message });
  messages = [...messages, message];
  renderMessages();
});

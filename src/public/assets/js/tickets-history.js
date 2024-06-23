let history = [];
const getTicketsHistory = async () => {
  const response = await axios.get(
    "http://localhost:3000/api/tickets/tickets-history"
  );
  history = response.data;

  if (response.data) showHistory();
};

const showHistory = () => {
  const historyContainer = document.getElementById("historyContainer");
  historyContainer.innerHTML = "";
  history.forEach(({ _id, count }) => {
    const currentHistory = document.createElement("div");
    currentHistory.className = "border";
    currentHistory.innerHTML = `
      <div class="w-full rounded-xl my-4 p-4 mx-2">
        <h1 class="text-3xl">Fecha: ${_id}</h1>
        <h3 class="text-xl">Total de turnos registrados: ${count}</h3>
      </div>`;
    historyContainer.appendChild(currentHistory);
  });
};
getTicketsHistory();

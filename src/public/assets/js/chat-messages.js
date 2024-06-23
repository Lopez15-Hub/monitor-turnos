let question = "";
let messages = [];
let loading = false;
socket.emit("request-welcome", "");
document.getElementById("chat-bubble").style.display = "flex";
document.getElementById("chat").style.display = "none";
document
  .getElementById("ask-input")
  .addEventListener("change", ({ target }) => (question = target.value));
const messagesContainer = document.getElementById("chat-messages");

const renderMessages = () => {
  messagesContainer.innerHTML = "";

  messages.forEach((message) => {
    const messageContainer = document.createElement("div");
    messageContainer.className = "w-60 border";
    messageContainer.className = `flex ${
      message.sender === "support" ? " justify-start" : " justify-end"
    }`;
    messageContainer.innerHTML = `
              <li class="list-none flex flex-col ${
                message.sender === "support" ? "bg-indigo-100 " : "bg-white "
              }  shadow-xl my-2 rounded-lg mr-1 w-72 p-2">
              ${message.text}

              <small class="text-gray-300">${
                message.sender === "support" ? "Personal de soporte" : "Yo"
              }</small>
              </li>
           `;
    messagesContainer.appendChild(messageContainer);
  });
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
};

const askToSupport = async () => {
  if (question.trim() === "") return;

  const exists = messages.some((message) => message.text === question);
  if (!exists) {
    const newQuestion = {
      text: question,
      sender: "me",
    };
    messages.push(newQuestion);
    renderMessages();
    document.getElementById("ask-input").value = "";
    socket.emit("ask-support", question);
  }
};

closeChat = () => {
  document.getElementById("chat-bubble").style.display = "flex";
  document.getElementById("chat").style.display = "none";
};
openChat = () => {
  document.getElementById("chat-bubble").style.display = "none";
  document.getElementById("chat").style.display = "flex";
};

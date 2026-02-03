let input = document.getElementById("messageInput");
let messages = document.getElementById("messages");

function addMessage(text, type) {
  let message = document.createElement("div");
  message.classList.add("message");
  message.classList.add(type);

  message.innerText = text;
  messages.appendChild(message);

  messages.scrollTop = messages.scrollHeight;
}

/* enviar mensaje */
function sendMessage() {
  let text = input.value.trim();

  if (text === "") {
    return;
  }

  addMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    botReply();
  }, 1000);
}

function botReply() {
  let lastMessage = messages.lastChild.innerText.toLowerCase();
  let reply = "No estoy seguro de entenderte 🤔";

  if (lastMessage.includes("hola") || lastMessage.includes("hey") || lastMessage.includes("holi")) {
  reply = "¡Hola! 😊";
  }


  if (lastMessage.includes("bien")) {
    reply = "Me alegro de eso 😄";
  }

  if (lastMessage.includes("que tal")) {
  reply = "Todo bien 😊 ¿y tú?";
 }

 if (lastMessage.includes("como estas")) {
  reply = "Bien, gracias por preguntar 😄";
 }

  if (lastMessage.includes("mal")) {
    reply = "Vaya… lo siento 😕";
  }

  if (lastMessage.includes("gracias")) {
    reply = "¡De nada!";
  }

  if (lastMessage.includes("ayuda")) {
    reply = "¿En qué puedo ayudarte?";
  }

  if (lastMessage.includes("adios")){
    reply = "¡Hasta  pronto!"
  }
  if (lastMessage.includes("cansado")) {
  reply = "Descansar un poco siempre ayuda 😴";
  }

  if (lastMessage.includes("feliz")) {
  reply = "¡Me alegro mucho! 😄";
  }

  if (lastMessage.includes("triste")) {
  reply = "Lo siento 😕 espero que todo mejore";
  }

  if (lastMessage.includes("quien eres")) {
  reply = "Soy un bot de prueba 🤖";
  }

  if (lastMessage.includes("que haces")) {
  reply = "Estoy aquí para practicar chats 😊";
  }

  if (lastMessage.includes("que es esto")) {
  reply = "Es un chat simulado hecho con JavaScript";
  }

  if (lastMessage.includes("chao")) {
  reply = "¡Hasta luego! 👋";
  }

  if (lastMessage.includes("nos vemos")) {
  reply = "¡Nos vemos pronto!";
  } 
  if (lastMessage.includes("?")) {
  reply = "Buena pregunta 🤔";
  }


  addMessage(reply, "bot");
}


/* enviar con enter */
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});


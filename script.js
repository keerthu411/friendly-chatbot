function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userText = input.value.trim();

  if (userText === "") {
    return;
  }

  addMessage(userText, "user-message");

  const botReply = getBotResponse(userText);
  
  setTimeout(() => {
    addMessage(botReply, "bot-message");
  }, 500);

  input.value = "";
}

function addMessage(message, className) {
  const chatBox = document.getElementById("chat-box");

  const messageDiv = document.createElement("div");
  messageDiv.className = className;
  messageDiv.textContent = message;

  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userText) {
  const text = userText.toLowerCase();

  if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
    return "Hi there! Nice to meet you.";
  } 
  else if (text.includes("how are you")) {
    return "I am doing great! Thanks for asking.";
  } 
  else if (text.includes("your name")) {
    return "My name is Friendly Bot.";
  } 
  else if (text.includes("what can you do")) {
    return "I can answer simple questions, greet you, tell jokes, and chat with you.";
  } 
  else if (text.includes("joke")) {
    return "Why did the computer go to the doctor? Because it had a virus!";
  } 
  else if (text.includes("devops")) {
    return "DevOps is a practice that combines development and operations to deliver software faster and better.";
  } 
  else if (text.includes("cloud")) {
    return "Cloud computing means using servers, storage, and software through the internet instead of only your own computer.";
  } 
  else if (text.includes("bye")) {
    return "Goodbye! Have a great day.";
  } 
  else if (text.includes("thank")) {
    return "You are welcome!";
  } 
  else {
    return "Sorry, I do not understand that yet. I am still learning!";
  }
}

document.getElementById("user-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
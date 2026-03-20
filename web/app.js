let instanceCounter = 0;

class Conversation {
  constructor(topic) {
    instanceCounter++;
    this.id = `convo-${instanceCounter}-${Date.now()}`;
    this.topic = topic;
    this.history = [];
  }

  sendMessage(message) {
    const response = `[${this.topic}] Echo: ${message}`;
    this.history.push(response);
    return response;
  }
}

const conversations = [];

function createConversation() {
  const input = document.getElementById("topic");
  const topic = input.value.trim();
  if (!topic) return;

  const convo = new Conversation(topic);
  conversations.push(convo);
  input.value = "";
  render();
}

function send(index) {
  const input = document.getElementById(`msg-${index}`);
  const msg = input.value.trim();
  if (!msg) return;

  conversations[index].sendMessage(msg);
  input.value = "";
  render();
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function render() {
  const container = document.getElementById("conversations");
  container.innerHTML = "";

  conversations.forEach((c, index) => {
    const div = document.createElement("div");
    div.className = "convo";

    const historyHTML = c.history
      .map((entry) => escapeHTML(entry))
      .join("<br>");

    div.innerHTML = `
      <div class="instance-id">ID: ${escapeHTML(c.id)}</div>
      <h3>${escapeHTML(c.topic)}</h3>
      <input placeholder="Message" id="msg-${index}" />
      <button data-send="${index}">Send</button>
      <div class="history">${historyHTML}</div>
    `;

    container.appendChild(div);
  });

  // Attach event listeners to send buttons (no inline handlers)
  document.querySelectorAll("[data-send]").forEach((btn) => {
    btn.addEventListener("click", () => {
      send(parseInt(btn.dataset.send, 10));
    });
  });

  // Allow Enter key to send messages
  document.querySelectorAll(".convo input").forEach((input) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const index = parseInt(input.id.replace("msg-", ""), 10);
        send(index);
      }
    });
  });
}

// Event listeners (no inline onclick)
document.getElementById("create-btn").addEventListener("click", createConversation);
document.getElementById("topic").addEventListener("keydown", (e) => {
  if (e.key === "Enter") createConversation();
});

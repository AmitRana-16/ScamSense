const app = document.querySelector(".app");
const userNameDisplay = document.getElementById("userNameDisplay");

let currentScreen = 0;

function updateScreen() {
  app.style.transform = `translateX(-${currentScreen * 100}vw)`;
}

function goToNext() {
  currentScreen = 1;
  updateScreen();
}

function goBack() {
  currentScreen = 0;
  updateScreen();
}

function saveName() {
  const name = document.getElementById("username").value.trim();
  if (!name) return alert("Please enter your name");

  localStorage.setItem("scamSenseUser", name);
  userNameDisplay.textContent = `👤 Hello ${name}`;

  currentScreen = 2;
  updateScreen();
}

function goToLevels() {
  currentScreen = 3;
  updateScreen();
}

function goToQuestion() {
  currentScreen = 4;
  updateScreen();
}

/* ANSWER CHECK */
function checkAnswer(isCorrect) {
  const modal = document.getElementById("resultModal");
  const title = document.getElementById("modalTitle");
  const msg = document.getElementById("modalMessage");

  if (isCorrect) {
    title.textContent = "✅ Correct!";
    msg.textContent =
      "This image contains visual artifacts and patterns commonly seen in AI-generated content.";
  } else {
    title.textContent = "❌ Incorrect";
    msg.textContent =
      "Look closely at lighting, textures, and inconsistencies before deciding.";
  }

  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("resultModal").classList.add("hidden");
}

/* Load name */
window.onload = () => {
  const savedName = localStorage.getItem("scamSenseUser");
  if (savedName) {
    userNameDisplay.textContent = `👤 ${savedName}`;
  }
};

const app = document.querySelector(".app");
const userNameDisplay = document.getElementById("userNameDisplay");

let currentScreen = 0;

/* =========================
   SCREEN NAVIGATION
========================= */
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

function goToLevels() {
  currentScreen = 3;
  updateScreen();
}

function goToQuestion(currentScreenValue) {
  currentScreen = currentScreenValue;
  updateScreen();
}

/* =========================
   SAVE NAME
========================= */
function saveName() {
  const name = document.getElementById("username").value.trim();
  if (!name) {
    alert("Please enter your name");
    return;
  }

  localStorage.setItem("scamSenseUser", name);
  userNameDisplay.textContent = `👤 ${name}`;

  currentScreen = 2;
  updateScreen();
}

/* =========================
   MODAL LOGIC
========================= */
function checkAnswer(isCorrect, questionDeatils, data, incorrect) {
  const modal = document.getElementById("resultModal");
  const title = document.getElementById("modalTitle");
  const msg = document.getElementById("modalMessage");

  if (isCorrect) {
    title.textContent = "✅ Correct!";
    msg.innerHTML = data;
  } else {
    title.textContent = "❌ Incorrect";
    msg.innerHTML = incorrect + data;
  }
  const button = document.getElementById("modalButton");
  button.setAttribute("data-id", questionDeatils);

  modal.classList.add("show");
}

function closeModal() {
  const modal = document.getElementById("resultModal");
  modal.classList.remove("show");

  const button = document.getElementById("modalButton");
  const dataId = button.getAttribute("data-id");
  currentScreen = dataId;
  updateScreen();
}

/* =========================
   LOAD SAVED NAME
========================= */
window.onload = () => {
  const savedName = localStorage.getItem("scamSenseUser");
  if (savedName) {
    userNameDisplay.textContent = `👤 ${savedName}`;
  }
};

const l1q1 = '<p style="text-align: justify"><b>A / B</b>: AI usually generates subjects together, not one goat separately.</p><p style="text-align: justify"><b>C</b>: Anatomy issues are clues, but they’re part of a larger AI-generated scene.</p><p style="text-align: justify">AI-generated images often appear realistic, but small clues like unnatural anatomy, overly smooth textures, perfect lighting, and staged backgrounds reveal that the entire scene is artificial.</p>';
const l1q1InC = '<b style="font-style: Italic; color: #00a67d">Correct Answer: Everything in the image</b>';
const l1q2 = 'AI usually generates subjects together, not one goat separately. Anatomy issues are clues, but they’re part of a larger AI-generated scene. AI-generated images often appear realistic, but small clues like unnatural anatomy, overly smooth textures, perfect lighting, and staged backgrounds reveal that the entire scene is artificial.';
const l1q3 = 'AI usually generates subjects together, not one goat separately. Anatomy issues are clues, but they’re part of a larger AI-generated scene. AI-generated images often appear realistic, but small clues like unnatural anatomy, overly smooth textures, perfect lighting, and staged backgrounds reveal that the entire scene is artificial.';
const l2q1 = 'AI usually generates subjects together, not one goat separately. Anatomy issues are clues, but they’re part of a larger AI-generated scene. AI-generated images often appear realistic, but small clues like unnatural anatomy, overly smooth textures, perfect lighting, and staged backgrounds reveal that the entire scene is artificial.';
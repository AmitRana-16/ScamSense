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

  if (!name) {
    alert("Please enter your name");
    return;
  }

  localStorage.setItem("scamSenseUser", name);
  userNameDisplay.textContent = `👤 Hello ${name}`;

  currentScreen = 2;
  updateScreen();
}

/* Load name if already saved */
window.onload = () => {
  const savedName = localStorage.getItem("scamSenseUser");
  if (savedName) {
    userNameDisplay.textContent = `👤 ${savedName}`;
  }
};

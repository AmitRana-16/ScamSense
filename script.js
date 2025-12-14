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
  userNameDisplay.textContent = `👤 Hello, ${name}`;

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
  const userScore = document.getElementById("scoreDisplay");
  const lastScreenScore = document.getElementById("lastScreenScore");

  if (isCorrect) {
    title.textContent = "✅ Correct!";
    msg.innerHTML = '<b style="font-style: Italic" class="glow-gold">+20 Points</b>' + data;
    score += 20;
    userScore.innerHTML = "Score: " + score;
  } else {
    title.textContent = "❌ Incorrect";
    msg.innerHTML = incorrect + data;
    userScore.innerHTML = "Score: " + score;
  }
  const button = document.getElementById("modalButton");
  button.setAttribute("data-id", questionDeatils);

  lastScreenScore.textContent = "Your Score: " + score;

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
    userNameDisplay.textContent = `👤 Hello, ${savedName}`;
  }
};

const input = document.getElementById("username");

if (input) {
  input.addEventListener("blur", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}



let score = 0;

const l1q1 = '<p style="text-align: justify"><b>A / B</b>: AI usually generates subjects together, not one goat separately.</p><p style="text-align: justify"><b>C</b>: Anatomy issues are clues, but they’re part of a larger AI-generated scene.</p><p style="text-align: justify">AI-generated images often appear realistic, but small clues like unnatural anatomy, overly smooth textures, perfect lighting, and staged backgrounds reveal that the entire scene is artificial.</p>';
const l1q1InC = '<b style="font-style: Italic; color: #00a67d">Correct Answer - D: Everything in the image</b>';

const l1q2 = '<p style="text-align: justify">Deepfake voices often fail to reproduce genuine emotional stress, even in urgent situations. Always verify such requests through a callback or alternate source.</p>';
const l1q2InC = '<b style="font-style: Italic; color: #00a67d">Correct Answer - A: Natural voice, but emotion and urgency feel off with odd pauses and pronunciation.</b><p style="text-align: justify">Scammers intentionally use familiar language, known names, and believable amounts.Look for emotional mismatch and unnatural pauses to identify AI-generated voices.</p>';

const l1q3 = '<p style="text-align: justify">The feet do not sink naturally into the sand and lack realistic pressure marks. The hand appears stiff, with limited natural finger movement. AI often struggles with body parts and how they interact with the environment.</p>';
const l1q3InC = '<b style="font-style: Italic; color: #00a67d">Correct Answer - B: Hand & Feet</b><p style="text-align: justify"><b>B / C / D</b>: These elements can appear realistic in real photos. The strongest AI clue is incorrect human anatomy and physical interaction.</p><p style="text-align: justify">Hands and feet often reveal AI errors. Here, the feet don’t interact with sand realistically, and the hand lacks natural posture.</p>';

const l2q1 = '<p style="text-align: justify"><b>Real Video</b>: Mrs. Sudha Murty discusses a philosophical view on money, matching her known public speaking style and genuine event appearances.</p><p style="text-align: justify"><b>Fake Video</b>: A financial deepfake using an AI-cloned voice to promote an unrealistic investment scheme (₹21,000 → ₹15,00,000/month).</p>'
const l2q1InC = '<b style="font-style: Italic; color: #00a67d">Correct Answer - A: First</b>';
function checkAnswer(selected) {
  const correctAnswer = "AI"; // change per level
  const result = document.getElementById("result");

  if (selected === correctAnswer) {
    result.textContent = "✅ Correct! This is AI-generated.";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Incorrect. Try again!";
    result.style.color = "red";
  }
}

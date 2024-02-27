// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  // complete the code here
	const name = nameInput.value.trim();
  const score = parseInt(scoreInput.value.trim());

  if (name === "" || isNaN(score)) {
    alert("Please enter a valid name and score.");
    return;
  }

  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  highScores.push({ name, score });
  highScores.sort((a, b) => b.score - a.score);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  showScores();
}

// Show scores in div
function showScores() {
  // complete the code
	const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  if (highScores.length === 0) {
    scores.innerHTML = "No scores yet";
    return;
  }

  let tableHTML = "<table><tr><th>Name</th><th>Score</th></tr>";
  highScores.forEach(entry => {
    tableHTML += `<tr><td>${entry.name}</td><td>${entry.score}</td></tr>`;
  });
  tableHTML += "</table>";

  scores.innerHTML = tableHTML;
}

showScores();

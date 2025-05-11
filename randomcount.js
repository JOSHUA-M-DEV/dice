const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const result = document.getElementById("result");
const rollBtn = document.getElementById("roll");

const rotations = {
  1: { x: 0, y: 0 },
  2: { x: -90, y: 0 },
  3: { x: 0, y: -90 },
  4: { x: 0, y: 90 },
  5: { x: 90, y: 0 },
  6: { x: 180, y: 0 }
};

// These variables will store the latest rolled values
let currentVal1 = 1;
let currentVal2 = 1;

function rollDice() {
  rollBtn.disabled = true;

  // Generate new values
  currentVal1 = Math.floor(Math.random() * 6) + 1;
  currentVal2 = Math.floor(Math.random() * 6) + 1;

  const r1 = rotations[currentVal1];
  const r2 = rotations[currentVal2];

  // Rotate the dice faces correctly
  dice1.style.transition = "transform 1s cubic-bezier(0.5, 0, 0.5, 1)";
  dice2.style.transition = "transform 1s cubic-bezier(0.5, 0, 0.5, 1)";

  dice1.style.transform = `rotateX(${r1.x + 360}deg) rotateY(${r1.y + 360}deg)`;
  dice2.style.transform = `rotateX(${r2.x + 360}deg) rotateY(${r2.y + 360}deg)`;

  // Wait for animation to end, then show correct total
  setTimeout(() => {
    result.textContent = `Your Total is: ${currentVal1 + currentVal2}`;
    rollBtn.disabled = false;
  }, 1000); // Ensure it matches the duration of the rotation
}

rollBtn.addEventListener("click", rollDice);

// Завдання 1: Таймер інтервалу
let count = 0;
const interval = setInterval(() => {
  document.getElementById("message").textContent =
    "Повідомлення " + (count + 1);
  count++;
  if (count === 5) {
    clearInterval(interval);
    document.getElementById("message").textContent = "Інтервал зупинено.";
  }
}, 1000);

// Завдання 2: Анімація елементів
let box = document.getElementById("box");
let size = 100;
let position = 0;

setInterval(() => {
  size += 10;
  position += 10;
  box.style.width = size + "px";
  box.style.height = size + "px";
  box.style.left = position + "px";
  box.style.top = position + "px";
}, 1000);

// Завдання 3: Інтерактивна гра
let score = 0;
let target = document.getElementById("target");

const gameSection = document.querySelector(".game");

setInterval(() => {
  const gameWidth = gameSection.offsetWidth;
  const gameHeight = gameSection.offsetHeight;

  const x = Math.random() * (gameWidth - 50);
  const y = Math.random() * (gameHeight - 50);

  target.style.left = x + "px";
  target.style.top = y + "px";
}, 1000);

target.addEventListener("click", () => {
  score++;
  document.getElementById("score").textContent = "Очки: " + score;
});

// Завдання 4: Контроль часу
document.getElementById("startButton").addEventListener("click", () => {
  const time = document.getElementById("timeInput").value;
  setTimeout(() => {
    alert("Час вийшов!");
  }, time * 1000);
});

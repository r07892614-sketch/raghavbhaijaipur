let timeLeft = 60;
const timer = document.getElementById("timer");

const countdown = setInterval(() => {
  timeLeft--;
  timer.textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(countdown);
    timer.textContent = "Ready!";
  }
}, 1000);

// Fade animation
const joinBtn = document.getElementById("joinBtn");
let fade = true;
setInterval(() => {
  joinBtn.style.opacity = fade ? "0.85" : "1";
  fade = !fade;
}, 1200);

// Redirect
joinBtn.addEventListener("click", () => {
  window.open("https://t.me/+4wTrjwksrhYwYWVl", "_blank");
});

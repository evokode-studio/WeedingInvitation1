// countdown.js

const countdownDate = new Date("2025-08-10T00:00:00").getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelectorAll(".countdown__number")[0].textContent = days;
  document.querySelectorAll(".countdown__number")[1].textContent = hours;
  document.querySelectorAll(".countdown__number")[2].textContent = mins;
  document.querySelectorAll(".countdown__number")[3].textContent = secs;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown__numbers").innerHTML = "<p>¡Ya llegó el gran día!</p>";
  }
}, 1000);

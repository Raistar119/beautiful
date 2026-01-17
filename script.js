/* ================= THEME TOGGLE ================= */
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
let isDark = false;

toggleBtn.addEventListener("click", () => {
  isDark = !isDark;
  body.classList.toggle("dark-theme", isDark);
  toggleBtn.textContent = isDark ? "☀️" : "🌙";

  if (isDark) startStars();
  else stopStars();
});

/* ================= STARS ================= */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];
let animationId;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars(count = 200) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.5,
      speed: Math.random() * 0.6 + 0.2
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();

    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });

  animationId = requestAnimationFrame(drawStars);
}

function startStars() {
  resizeCanvas();
  createStars();
  drawStars();
  window.addEventListener("resize", resizeCanvas);
}

function stopStars() {
  cancelAnimationFrame(animationId);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  window.removeEventListener("resize", resizeCanvas);
}

/* ================= SERVICES → CALENDAR ================= */
const serviceCards = document.querySelectorAll(".service-card");
const bookingSection = document.getElementById("booking");

let activeService = null;

serviceCards.forEach(card => {
  card.addEventListener("click", () => {
    activeService = card.dataset.service;
    bookingSection.scrollIntoView({ behavior: "smooth" });
    renderCalendar(new Date());
  });
});

/* ================= CALENDAR ================= */
const calendarGrid = document.getElementById("calendarGrid");
const monthLabel = document.getElementById("calendarMonth");
const prevBtn = document.getElementById("prevMonth");
const nextBtn = document.getElementById("nextMonth");

let currentDate = new Date();

// ФЕЙК-ДАННЫЕ ЗАНЯТОСТИ (разные для каждой услуги)
const busyDays = {
  hair: [3, 7, 14, 21],
  nails: [5, 10, 18, 25],
  cosmetology: [2, 9, 16, 23]
};

function renderCalendar(date) {
  calendarGrid.querySelectorAll(".date").forEach(el => el.remove());

  const year = date.getFullYear();
  const month = date.getMonth();

  monthLabel.textContent = date.toLocaleString("ru", {
    month: "long",
    year: "numeric"
  });

  const firstDay = new Date(year, month, 1).getDay() || 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i < firstDay; i++) {
    calendarGrid.appendChild(document.createElement("div"));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.className = "date";
    cell.textContent = day;

    if (busyDays[activeService]?.includes(day)) {
      cell.classList.add("busy");
    } else {
      cell.classList.add("free");
    }

    calendarGrid.appendChild(cell);
  }
}

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

/* ================= REVIEWS ================= */
const reviewForm = document.querySelector(".review-form");
const reviewsGrid = document.querySelector(".reviews-grid");

reviewForm.addEventListener("submit", e => {
  e.preventDefault();

  const name = reviewForm.querySelector("input").value;
  const text = reviewForm.querySelector("textarea").value;

  const card = document.createElement("div");
  card.className = "review-card";
  card.innerHTML = `<p>“${text}”</p><span>— ${name}</span>`;

  reviewsGrid.prepend(card);
  reviewForm.reset();
});


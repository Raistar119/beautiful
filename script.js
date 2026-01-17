* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Inter, sans-serif;
  transition: background 1s, color 1s;
}

body.light {
  background: #f4f6ff;
  color: #1f2937;
}

body.dark {
  background: #0f1220;
  color: #f1f5f9;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
}

.logo {
  font-weight: 700;
  font-size: 22px;
}

.theme-btn {
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
}

.hero {
  padding: 80px 20px;
  text-align: center;
}

.hero span {
  color: #7c3aed;
}

.btn {
  margin-top: 20px;
  padding: 12px 28px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(90deg,#7c3aed,#2563eb);
  color: white;
  cursor: pointer;
}

.services {
  padding: 60px 20px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  gap: 20px;
}

.service {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
}

body.dark .service {
  background: #1a1d35;
}

.service img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.calendar {
  padding: 60px 20px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7,1fr);
  gap: 10px;
}

.day {
  padding: 12px;
  border-radius: 8px;
  text-align: center;
}

.free { background: #22c55e; color: white; }
.busy { background: #ef4444; color: white; }

.reviews {
  padding: 60px 20px;
}

.reviews-list div {
  background: white;
  padding: 20px;
  border-radius: 14px;
  margin-bottom: 12px;
}

body.dark .reviews-list div {
  background: #1a1d35;
}

.footer {
  padding: 30px;
  text-align: center;
  opacity: 0.6;
}

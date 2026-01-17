* {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
  margin: 0;
  background: #f5f6f8;
  color: #111;
}

.header {
  background: white;
  padding: 16px 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header a {
  margin-left: 16px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.hero {
  padding: 60px 20px;
  text-align: center;
}

.services {
  padding: 40px 20px;
  max-width: 1000px;
  margin: auto;
}

.service-card {
  background: white;
  padding: 24px;
  margin-bottom: 20px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  cursor: pointer;
  font-size: 18px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.booking {
  background: white;
  margin: 40px auto;
  max-width: 600px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.hidden {
  display: none;
}

.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin: 20px 0;
}

.day {
  padding: 12px;
  background: #f1f1f1;
  border-radius: 10px;
  text-align: center;
}

.day.free {
  background: #d1f7d6;
}

.day.busy {
  background: #ffd6d6;
}

.reviews {
  padding: 40px 20px;
  max-width: 800px;
  margin: auto;
}

.review {
  background: white;
  padding: 20px;
  border-radius: 14px;
  margin-bottom: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

footer {
  text-align: center;
  padding: 20px;
  color: #666;
}

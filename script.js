// THEME
const themeToggle = document.getElementById('themeToggle');
themeToggle.onclick = () => {
  document.body.classList.toggle('dark');
};

// MENU
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.onclick = () => nav.classList.toggle('open');
nav.querySelectorAll('a').forEach(a=>{
  a.onclick=()=>nav.classList.remove('open');
});

// SCROLL
function scrollToBooking(){
  document.getElementById('booking')
    .scrollIntoView({behavior:'smooth'});
}

// CALENDAR
const daysEl=document.getElementById('days');
const timesEl=document.getElementById('times');

const now=new Date();
const daysInMonth=new Date(now.getFullYear(),now.getMonth()+1,0).getDate();

for(let i=1;i<=daysInMonth;i++){
  const free=Math.random()>.4;
  const d=document.createElement('div');
  d.className='day '+(free?'free':'busy');
  d.textContent=i;
  d.onclick=()=>showTimes(free);
  daysEl.appendChild(d);
}

function showTimes(free){
  timesEl.innerHTML='';
  ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00']
    .forEach(t=>{
      const el=document.createElement('div');
      el.className='time'+(free&&Math.random()>.5?'':' busy');
      el.textContent=t;
      timesEl.appendChild(el);
    });
}

// STARS
const c=document.getElementById('stars');
const ctx=c.getContext('2d');
c.width=innerWidth;
c.height=innerHeight;

let stars=[...Array(180)].map(()=>({
  x:Math.random()*c.width,
  y:Math.random()*c.height,
  r:Math.random()*1.2+.3,
  s:Math.random()*.4+.2
}));

(function animate(){
  ctx.clearRect(0,0,c.width,c.height);
  if(document.body.classList.contains('dark')){
    stars.forEach(s=>{
      ctx.fillStyle='rgba(255,255,255,.8)';
      ctx.beginPath();
      ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fill();
      s.y+=s.s;
      if(s.y>c.height)s.y=0;
    });
  }
  requestAnimationFrame(animate);
})();

const calendars = {
  nails: ['free','busy','free','free','busy','free','busy'],
  hair:  ['busy','busy','free','free','free','busy','free'],
  makeup:['free','free','free','busy','busy','free','free']
};

function openBooking(service) {
  document.getElementById('booking').classList.remove('hidden');
  document.getElementById('booking-title').innerText =
    'Запись: ' + serviceName(service);

  const calendar = document.getElementById('calendar');
  calendar.innerHTML = '';

  calendars[service].forEach((status, i) => {
    const day = document.createElement('div');
    day.className = 'day ' + status;
    day.innerText = i + 1;
    calendar.appendChild(day);
  });
}

function closeBooking() {
  document.getElementById('booking').classList.add('hidden');
}

function serviceName(key) {
  return {
    nails: 'Маникюр',
    hair: 'Волосы',
    makeup: 'Макияж'
  }[key];
}

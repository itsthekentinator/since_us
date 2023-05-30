// Calculate the time difference
const startDate = new Date('April 12, 2023 21:00:00').getTime();
let currentDate, timeDifference, years, months, days, hours, minutes, seconds, moonCycles;

function updateTimer() {
  // Calculate the time difference
  currentDate = new Date().getTime();
  timeDifference = currentDate - startDate;

  // Calculate years, months, days, hours, minutes, seconds, and moon cycles
  years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
  months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  moonCycles = Math.floor(days / 29.5); // Assuming 29.5 days per moon cycle

  // Update the timer display
  document.getElementById('years').textContent = years;
  document.getElementById('months').textContent = months;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
  document.getElementById('moon-cycles').textContent = moonCycles;
}

// Update the timer every second
setInterval(updateTimer, 1000);

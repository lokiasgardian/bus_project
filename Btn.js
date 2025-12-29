const seats = document.querySelectorAll('.seat');
const seatList = document.getElementById('seatList');
const total = document.getElementById('total');
const bookBtn = document.getElementById('bookBtn');
const popup = document.getElementById('popup');

const PRICE = 500;
let selectedSeats = [];

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    const num = seat.dataset.seat;

    seat.classList.toggle('selected');

    if (selectedSeats.includes(num)) {
      selectedSeats = selectedSeats.filter(s => s !== num);
    } else {
      selectedSeats.push(num);
    }

    updateSummary();
  });
});

function updateSummary() {
  seatList.textContent = selectedSeats.length
    ? selectedSeats.join(', ')
    : 'None';

  total.textContent = selectedSeats.length * PRICE;
  bookBtn.disabled = selectedSeats.length === 0;
}

bookBtn.addEventListener('click', () => {
  popup.classList.add('active');
  launchConfetti();
});

function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = `hsl(${Math.random()*360},100%,50%)`;
    document.body.appendChild(c);

    setTimeout(() => c.remove(), 3000);
  }
}
bookBtn.addEventListener('click', () => {
  popup.classList.add('active');
  launchConfetti();

 
  setTimeout(() => {
    popup.classList.remove('active');
  }, 1000);
});

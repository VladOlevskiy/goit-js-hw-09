import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

startBtn.setAttribute('disabled', 'disabled');
let timerId = null;
let selectedDate;

startBtn.addEventListener('click', onClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
      Notify.failure('Please choose a date in the future');
      startBtn.setAttribute('disabled', 'disabled');
    }
    if (selectedDates[0].getTime() > options.defaultDate.getTime()) {
      startBtn.removeAttribute('disabled');
    }
  },
};

function onClick(evt) {
  timerId = setInterval(() => {
    startBtn.setAttribute('disabled', 'disabled');
    const timeNow = Date.now();
    const delta = -(timeNow - selectedDate);

    if (delta < 1000) {
      clearInterval(timerId);
    }
    return addLeadingZero(convertMs(delta));
  }, 1000);
}

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(obj) {
  const values = Object.values(obj);
  days.textContent = values[0].toString().padStart(2, 0);
  hours.textContent = values[1].toString().padStart(2, 0);
  minutes.textContent = values[2].toString().padStart(2, 0);
  seconds.textContent = values[3].toString().padStart(2, 0);
}

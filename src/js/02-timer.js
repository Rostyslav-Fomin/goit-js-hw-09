import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  dataInput: document.querySelector('input[type="text"]'),
  startCauntdownButton: document.querySelector('button[data-start]'),
  timerValueDays: document.querySelector('.value[data-days]'),
  timerValueHours: document.querySelector('.value[data-hours]'),
  timerValueMinutes: document.querySelector('.value[data-minutes]'),
  timerValueSeconds: document.querySelector('.value[data-seconds]'),
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (!(selectedDates[0] > options.defaultDate)) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    enableStartCountdownButton();
    refs.startCauntdownButton.addEventListener('click', onStartCauntdownButton);
    return (selectedTime = selectedDates[0].getTime());
  },
};
let selectedTime;
let timeLeft;
let timerId;
let round = (a, b) => Math.round(a / b) * b;

disableStartCountdownButton();

flatpickr(refs.dataInput, options);

function disableStartCountdownButton() {
  refs.startCauntdownButton.disabled = true;
}

function enableStartCountdownButton() {
  refs.startCauntdownButton.disabled = false;
}

function onStartCauntdownButton(e) {
  disableStartCountdownButton();
  const currentTime = new Date().getTime();
  timeLeft = round(selectedTime - currentTime, 1000);
  timerId = setInterval(calcDiffTime, 1000, timeLeft);
}

function calcDiffTime() {
  timeLeft = timeLeft - 1000;
  if (timeLeft <= 0) {
    clearInterval(timerId);
  }
  changeMarkup(convertMs(timeLeft));
}

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

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function changeMarkup({ days, hours, minutes, seconds }) {
  refs.timerValueDays.textContent = addLeadingZero(days);
  refs.timerValueHours.textContent = addLeadingZero(hours);
  refs.timerValueMinutes.textContent = addLeadingZero(minutes);
  refs.timerValueSeconds.textContent = addLeadingZero(seconds);
}

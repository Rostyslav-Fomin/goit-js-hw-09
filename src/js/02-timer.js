import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  dataInput: document.querySelector('input[type="text"]'),
  timerValueDays: document.querySelector('.value[data-days]'),
  timerValueHours: document.querySelector('.value[data-hours]'),
  timerValueMinutes: document.querySelector('.value[data-minutes]'),
  timerValueSeconds: document.querySelector('.value[data-minutes]'),
}; 

console.log(refs.timerValueDays)

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
  createPromisesButton: document.querySelector('button'),
};
let delay;
let step;
let amount;
let position = 1;
let timerId = null;

refs.createPromisesButton.addEventListener('click', onClick);
refs.delay.addEventListener('input', onDelay);
refs.step.addEventListener('input', onStep);
refs.amount.addEventListener('input', onAmount);

function onDelay(e) {
  delay = Number(e.target.value);
}

function onStep(e) {
  step = Number(e.target.value);
}

function onAmount(e) {
  amount = Number(e.target.value);
}

function onClick(e) {
  e.preventDefault();
  if (step) {
    let firstDelay = delay;
    let newDelay = delay;
    let count = 1;
    timerId = setTimeout(() => {
      createPromise(position, delay);
    }, delay);
    for (let i = 2; i <= amount; i += 1) {
      if (amount >= count) {
        newDelay += step;
        count += 1;
      }
      timerId = setTimeout(() => {
        createPromise(i, (firstDelay += step));
      }, newDelay);
    }
    return;
  }
  delay = refs.delay.value;
  for (let i = 1; i <= amount; i += 1) {
    timerId = setTimeout(() => {
      createPromise(i, delay);
    }, delay);
  }
}

function createPromise(position, delay) {
  const promise = new Promise((reslove, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
  return promise;
}

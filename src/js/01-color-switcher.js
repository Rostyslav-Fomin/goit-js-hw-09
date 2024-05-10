function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
let timerId = null;


refs.startBtn.addEventListener('click', startBodyChangeColor);
refs.stopBtn.addEventListener('click', stopBodyChangeColor);

function startBodyChangeColor(e) {
  timerId = setInterval(changeBodyColor, 1000);
  e.target.disabled = true;
  refs.stopBtn.disabled = false;
}

function changeBodyColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function stopBodyChangeColor(e) {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
  e.target.disabled = true;
}

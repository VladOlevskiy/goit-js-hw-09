const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;
let statusStartBtn = true;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', changeColor);

stopBtn.addEventListener('click', stopChangeColor);

function changeColor(evt) {
  if (statusStartBtn) {
    startBtn.setAttribute('disabled', 'disabled');
    statusStartBtn = false;
    timerId = setInterval(() => {
      const randomColor = getRandomHexColor();
      bodyEl.style.backgroundColor = randomColor;
    }, 1000);
  }
}

function stopChangeColor(evt) {
  clearInterval(timerId);
  statusStartBtn = true;
  startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let changes = null;

btnStart.addEventListener('click', e => {
  btnStart.setAttribute('disabled', true);
  changes = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', () => {
  btnStart.removeAttribute('disabled');
  clearInterval(changes);
});



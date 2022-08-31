import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('form');

formEl.addEventListener('submit', submitForm);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

function submitForm(evt) {
  evt.preventDefault();

  let delayValue = Number(formEl.elements.delay.value);
  let stepValue = Number(formEl.elements.step.value);
  let amountValue = Number(formEl.elements.amount.value);

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue)
      .then(result => {
        Notify.success(result);
      })
      .catch(result => {
        Notify.failure(result);
      });

    delayValue += stepValue;
  }
}

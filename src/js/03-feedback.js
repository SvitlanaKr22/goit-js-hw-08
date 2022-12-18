//Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.
// - Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде рядок "feedback-form-state".
// - Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.
// - Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// - Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту
//і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const FEEDBACK_FORM = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

windowLoad();

function onFormInput() {
  const formData = {
    email: input.value,
    message: textarea.value,
  };
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(FEEDBACK_FORM)));
  localStorage.removeItem(FEEDBACK_FORM);
}

function windowLoad() {
  const formOutStorage = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
  if (formOutStorage) {
    input.value = formOutStorage.email;
    textarea.value = formOutStorage.message;
  }
}

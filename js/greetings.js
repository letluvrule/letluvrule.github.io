const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  const currentHour = new Date().getHours();
  let greetingMessage = '';

  if (currentHour >= 18 || currentHour < 6) {
    greetingMessage = 'Good Night!';
  } else if (currentHour >= 6 && currentHour < 12) {
    greetingMessage = 'Good Morning!';
  } else {
    greetingMessage = 'Good Afternoon!';
  }

  greeting.innerText = `${greetingMessage} ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

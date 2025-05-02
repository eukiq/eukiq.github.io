const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const loginBox = document.querySelector('.form-box.login');
const registerBox = document.querySelector('.form-box.register');
const container = document.querySelector('.container');

function showForm(form) {
  if (form === 'login') {
    container.classList.remove('active');
    loginBox.classList.add('active');
    registerBox.classList.remove('active');
  } else {
    container.classList.add('active');
    loginBox.classList.remove('active');
    registerBox.classList.add('active');
  }
}

registerBtn.addEventListener('click', () => showForm('register'));
loginBtn.addEventListener('click', () => showForm('login'));

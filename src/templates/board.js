import '../styles/board.css';

function component() {
  
  const element = document.createElement('h1');
  element.innerHTML = "Это страница Индекс"
  /*
  const btn = document.createElement('button');

 
 // Lodash, currently included via a script, is required for this line to work
 // Lodash, now imported by this script
  element.innerHTML = "Hello, world";
  element.classList.add('login-footer-div');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  */

  return element;
}

const header = document.querySelector('.main-header');
header.appendChild(component());
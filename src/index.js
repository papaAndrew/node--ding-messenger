import './styles.css';
import printMe from './print.js';


function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

 
 // Lodash, currently included via a script, is required for this line to work
 // Lodash, now imported by this script
  element.innerHTML = "Hello, world";
  element.classList.add('my-class');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  

  return element;
}

document.body.appendChild(component());
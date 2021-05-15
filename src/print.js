
export default function printMe() {

  const div = document.querySelector(".login-footer-div");
  div.innerHTML = "Hello";

  console.log('I get called from print.js!');
}
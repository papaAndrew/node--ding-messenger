
export default function printMe() {

  const div = document.querySelector(".my-class");
  div.innerHTML = "Hello";

  console.log('I get called from print.js!');
}
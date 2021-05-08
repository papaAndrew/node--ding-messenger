//const [MAIN_CLASS_NAME, MAIN_HEADER_NAME, MAIN_MIDDLE_NAME, MAIN_FOOTER_NAME] = [".login", "header", "middle", "footer"]; 


export function setHello(data) {

  const spanState = document.querySelector(".login-footer-server-state");

  spanState.innerHTML = data.state;
}

export function errHello(err) {

  const spanState = document.querySelector(".login-footer-server-state");
  spanState.innerHTML = err;
}

import { selectNetStatusElements } from "../view/persistent.js";

function log(text) {
  var time = new Date();

  console.log(`[${time.toLocaleTimeString()}]\t${text}`);
}


export class DingMessenger {

  _serverState = {
    welcome: false,
    message: "Offline"
  };


  getServerState() {
    return this._serverState;
  }   

  setServerState(data) {
    this._serverState = Object.assign(this._serverState, data);

    const html = document.querySelector(".login-footer-server-state");
    html.innerHTML = caption;

    if (this._serverState.welcome) {
      html.classList.add("status-online");
    } else {
      html.classList.remove("status-online");
    }
  }


}
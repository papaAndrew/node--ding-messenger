import { clientHello } from "../model/clientHomeRest";
import { setHello } from "../view/viewLogin";



function getHello(data) {
  
  setHello({ 
    welcome: true,
    message: `Server ${data.name}`,
  })
}


function errHello(err) {
  
  setHello({ 
    welcome: false,
    message: err
  })
}


/**
 * инициализация и первичная отрисовка
 */
 export default function initialize() {

  clientHello(getHello, errHello);
  
  getHello();
}


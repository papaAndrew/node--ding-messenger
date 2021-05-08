import { queryGet } from "./clientRest";


const URL_HOME = "http://localhost:7000";

const PATH_LOGIN = "login";

/**
 * Запрос состояния сервера
 */
export function clientHello(onData, onError) {

  const url = `${URL_HOME}/${PATH_LOGIN}`;
  
  queryGet(url, onData, onError);
}

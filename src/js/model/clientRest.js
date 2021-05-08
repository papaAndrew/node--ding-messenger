

export function queryGet(url, onData, onError) {

  const checkForError = response => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  };

  
  fetch(url)
    .then(checkForError)
    .then(onData)
    .catch(onError);
}
import { SAVEFIRST100, SAVEDETAILS } from "./actionsTypes";

export function getfirst100(dispatch) {
  fetch("http://localhost:3001/videogames")
    .then((x) => x.json())
    .then((x) => dispatch(saveFirst100(x)));
}

export function getDetails(dispatch, id) {
  fetch("http://localhost:3001/videogames/" + id)
    .then((x) => x.json())
    .then((x) => dispatch(saveDetails(x)));
}
export function saveFirst100(result) {
  return {
    type: SAVEFIRST100,
    payload: result,
  };
}

export function saveDetails(result) {
  return {
    type: SAVEDETAILS,
    payload: result,
  };
}

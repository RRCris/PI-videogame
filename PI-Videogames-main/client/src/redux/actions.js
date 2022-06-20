import {
  SAVEFIRST100,
  SAVEDETAILS,
  ORDERFIRST100,
  ADDFILTER,
  DELFILTER,
  CLEARFILTER,
  NEXTPAG,
  PREVPAG,
} from "./actionsTypes";

export function getfirst100(dispatch) {
  fetch("http://localhost:3001/videogames")
    .then((x) => x.json())
    .then((x) => dispatch(saveFirst100(x)));
}

export function getSearch(dispatch, search) {
  fetch("http://localhost:3001/videogames?name=" + search)
    .then((x) => x.json())
    .then((x) => dispatch(saveFirst100(x)));
}

export function getDetails(dispatch, id) {
  fetch("http://localhost:3001/videogames/" + id)
    .then((x) => x.json())
    .then((x) => dispatch(saveDetails(x)));
}

export function orderFisrt100(order) {
  return {
    type: ORDERFIRST100,
    payload: order,
  };
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

export function addFilter(result) {
  return {
    type: result.filter === "All" ? CLEARFILTER : ADDFILTER,
    payload: result,
  };
}

export function deleteFilter(result) {
  return {
    type: DELFILTER,
    payload: result,
  };
}
export function nextPag() {
  return {
    type: NEXTPAG,
    payload: 1,
  };
}

export function prevPag() {
  return {
    type: PREVPAG,
    payload: -1,
  };
}

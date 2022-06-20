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

let defaultState = {
  first100: [],
  details: { id: undefined },
  order: "",
  filters: {
    origin: [],
    plataforms: [],
    genres: [],
    pag: 1,
    numPag: 15,
  },
};

function sortAlfabetic(a, b) {
  return a.name.localeCompare(b.name);
}
function sortAlfabeticReverse(a, b) {
  return b.name.localeCompare(a.name);
}
function sortScore(a, b) {
  return b.rating - a.rating;
}
function sortScoreReverse(a, b) {
  return a.rating - b.rating;
}
export function Reducer(state, action) {
  if (!state) return defaultState;
  let tempfilters;
  switch (action.type) {
    case SAVEFIRST100:
      return { ...state, first100: action.payload };
    case SAVEDETAILS:
      return { ...state, details: action.payload };
    case ORDERFIRST100:
      let arr = state.first100;
      if (action.payload === "alfabetic") {
        arr = arr.sort(sortAlfabetic);
      } else if (action.payload === "alfabetic-reverse") {
        arr = arr.sort(sortAlfabeticReverse);
      } else if (action.payload === "most score") {
        arr = arr.sort(sortScore);
      } else if (action.payload === "lower score") {
        arr = arr.sort(sortScoreReverse);
      }

      return { ...state, first100: arr, order: action.payload };
    case ADDFILTER:
      tempfilters = state.filters;
      if (action.payload.class === "origin") {
        tempfilters.origin = [action.payload.filter];
      } else if (
        action.payload.class === "plataforms" &&
        !tempfilters.plataforms.includes(action.payload.filter)
      ) {
        tempfilters.plataforms.push(action.payload.filter);
      } else if (
        action.payload.class === "genres" &&
        !tempfilters.genres.includes(action.payload.filter)
      ) {
        tempfilters.genres.push(action.payload.filter);
      }

      return { ...state, filters: tempfilters };
    case DELFILTER:
      tempfilters = state.filters;
      if (tempfilters.origin.includes(action.payload)) {
        tempfilters.origin = [];
      } else if (tempfilters.plataforms.includes(action.payload)) {
        let i = tempfilters.plataforms.indexOf(action.payload.toString());
        tempfilters.plataforms.splice(i, 1);
      } else if (tempfilters.genres.includes(action.payload)) {
        let i = tempfilters.genres.indexOf(action.payload.toString());
        tempfilters.genres.splice(i, 1);
      }

      return { ...state, filters: tempfilters };

    case CLEARFILTER:
      tempfilters = state.filters;
      if (action.payload.class === "origin") {
        tempfilters.origin = [];
      } else if (action.payload.class === "plataforms") {
        tempfilters.plataforms = [];
      } else if (action.payload.class === "genres") {
        tempfilters.genres = [];
      }
      return { ...state, filters: tempfilters };
    case NEXTPAG:
      let filterNEXTPAG = state.filters;
      filterNEXTPAG.pag += 1;
      return { ...state, filters: filterNEXTPAG };
    case PREVPAG:
      let filterPREVPAG = state.filters;
      filterPREVPAG.pag -= 1;
      return { ...state, filters: filterPREVPAG };
    default:
      return state;
  }
}

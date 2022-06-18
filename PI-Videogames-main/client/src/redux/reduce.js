import { SAVEFIRST100, SAVEDETAILS } from "./actionsTypes";

let defaultState = {
  first100: [],
  details: { id: undefined },
};
export function Reducer(state, action) {
  if (!state) return defaultState;

  switch (action.type) {
    case SAVEFIRST100:
      return { ...state, first100: action.payload };
    case SAVEDETAILS:
      return { ...state, details: action.payload };
    default:
      return state;
  }
}

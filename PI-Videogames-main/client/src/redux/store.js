import { createStore } from "redux";
import { Reducer } from "./reduce";

export let store = createStore(Reducer);

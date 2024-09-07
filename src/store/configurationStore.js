import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import mainReducer from "../reducer";

export default function configurationStore(initialState) {
  const store = createStore(mainReducer, applyMiddleware(thunk), initialState);
  return store;
}

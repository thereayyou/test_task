import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { rootReducer } from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware())
);

export default store;

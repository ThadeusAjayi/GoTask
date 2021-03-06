import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer";

let composeEnhancers = compose;
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  Reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

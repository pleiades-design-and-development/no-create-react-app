import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("body")
);


// elements
/*
const count = document.getElementById("count");
const decButton = document.getElementById("decrement");
const incButton = document.getElementById("increment");

count.textContent = store.getState();

// even handlers
decButton.addEventListener("click", () => {
  store.dispatch(decrement())
  count.textContent = store.getState();
});
incButton.addEventListener("click", () => {
  store.dispatch(increment())
  count.textContent = store.getState();
});
*/

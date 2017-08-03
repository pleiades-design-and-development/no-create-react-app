import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers/reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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

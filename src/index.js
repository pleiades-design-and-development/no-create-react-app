import {createStore} from "redux";
import ReactDOM from "react-dom";
import React from "react";
import reducer from "./reducers/reducer";
import {increment, decrement} from "./actions/actions";

const store = createStore(reducer);

class App extends React.Component {
    render(){
      return <div>Test</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("body"));


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

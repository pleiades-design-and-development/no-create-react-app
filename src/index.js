const createStore = require("redux").createStore;

const reducer = (state, action) => {
  state = typeof state === "undefined" ? 0 : state;

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const increment = () => ({type: "INCREMENT"});
const decrement = () => ({type: "DECREMENT"});

const store = createStore(reducer);

// elements
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

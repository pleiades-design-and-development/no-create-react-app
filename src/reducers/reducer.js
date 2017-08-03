export default (state, action) => {
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

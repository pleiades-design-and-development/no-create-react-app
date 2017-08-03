const initialState = {
    posts: []
}
export default (state = initialState, {type, waiting, posts}) => {
  switch (type) {
    case "LOADING":
      return {
        ...state,
        waiting
      };
    case "SET_POSTS":
      return {
        ...state,
        posts
      }
    default:
      return state;
  }
};

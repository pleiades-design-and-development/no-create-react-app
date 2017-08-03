const loading = (waiting = true) => ({
  type: "LOADING",
  waiting
});

const setPosts = ({posts}) => ({
  type: "SET_POSTS",
  posts
});

const URL = "https://tiny-lasagna-server.herokuapp.com/collections/blogger/";
export const getPosts = () => {
    return async dispatch => {
      dispatch(loading());
      const posts = await fetch(URL).then(response => response.json());
      dispatch(setPosts({posts}));
      dispatch(loading(false));
    };
}

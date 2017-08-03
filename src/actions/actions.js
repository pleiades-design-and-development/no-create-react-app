const loading = (waiting = true) => ({
  type: "LOADING",
  waiting
});

const setPosts = ({posts}) => ({
  type: "SET_POSTS",
  posts
});

const URL = "https://tiny-lasagna-server.herokuapp.com/collections/blogger/";

export function getPosts () {
    return async function(dispatch) {
      dispatch(loading());

      /* with async/await
      const response = await fetch(URL)
      const posts = await response.json();
      dispatch(setPosts({posts}));
      dispatch(loading(false));
      */

      fetch(URL).then(response => response.json).then(posts {
        dispatch(setPosts({posts}));
        dispatch(loading(false));
      });
    };
}

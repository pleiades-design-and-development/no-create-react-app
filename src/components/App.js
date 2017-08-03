import React from "react";
import {connect} from "react-redux";
import {getPosts} from "../actions/actions";

const URL = "https://tiny-lasagna-server.herokuapp.com/collections/blogger/";

class App extends React.Component {
    componentDidMount() {
      const {dispatch} = this.props;
      dispatch(getPosts());
    }

    render(){
      const {posts} = this.props;
      return (
        <div>
          {posts.map(post =>
            <div key={post._id}>
              <header>
                <h1>{post.title}</h1>
                <h2>{post.name}</h2>
              </header>
              <article>
                <p>{post.blog}</p>
              </article>
            </div>
          )}
        </div>
      );
    }
}

export default connect(({posts}) => ({posts}))(App);

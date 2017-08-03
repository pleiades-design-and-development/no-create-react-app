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
        <ul>
          {posts.map(post => <li key={post._id}>{post.blog}</li>)}
        </ul>
      );
    }
}

export default connect(({posts}) => ({posts}))(App);

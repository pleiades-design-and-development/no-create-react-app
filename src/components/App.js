import React from "react";
import {connect} from "react-redux";
import {increment, decrement} from "../actions/actions";

class App extends React.Component {
    render(){
      const {dispatch, count} = this.props;
      return (
        <div>
          <button onClick={() => dispatch(decrement())}>-</button>
          <span>{count}</span>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      );
    }
}

export default connect(count => ({count}))(App);

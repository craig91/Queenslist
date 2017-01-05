import React from "react";
import {connect} from 'react-redux';


export class Main extends React.Component {
  render() {
    console.log(this.props)
    return <h3>Hello React!</h3>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Main);

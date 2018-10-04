import React from 'react';
import { connect } from 'react-redux';
import { push } from 'redux-first-routing';

const App = ({ pathname, dispatch }) => (
  <div>
    <button onClick={() => dispatch(push("/"))}>home</button>
    <button onClick={() => dispatch(push("/contact"))}>contact</button>
    <button onClick={() => dispatch(push("/about"))}>about</button>
    <div>{pathname}</div>
  </div>
)

const mapStateToProps = state => ({
  pathname: state.router.pathname
})

export default connect(mapStateToProps)(App)

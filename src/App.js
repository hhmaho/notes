import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'
import Link from './Link'

const App = ({ pathname, gotoAbout }) => (
  <div>
    <ul>
      <li><Link href="/" title="Home"/></li>
      <li><Link href="/current" title="In progress"/></li>
      <li><Link href="/history" title="Done"/></li>
    </ul>
  </div>
)

const mapStateToProps = state => ({
  pathname: state.router.pathname,
})

const mapDispatchToProps = dispatch => ({
  gotoCurrent: () => dispatch(push("current")),
}) 

export default connect(mapStateToProps, mapDispatchToProps)(App);
          /* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */
       
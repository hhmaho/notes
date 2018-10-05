import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Link from './Link'

const App = ({ pathname }) => (
  <div>
    <ul>
      <li><Link href="/" title="Home"/></li>
      <li><Link href="/current" title="In progress"/></li>
      <li><Link href="/history" title="Done"/></li>
    </ul>
    {renderBody(pathname)}
  </div>
)

function renderBody(path) {
  var tabs = path.split('/')
  switch (tabs[1]) {
    case '':
      return <h1>this is my homepage</h1>
    case 'current':
      return <h1>Works in progress</h1>
    case 'history':
      return <h1>Allready done</h1>
    default:
      return <h1>Error</h1>
  }
}

const mapStateToProps = state => ({
  pathname: state.router.pathname,
})

const mapDispatchToProps = dispatch => ({
}) 

export default connect(mapStateToProps, mapDispatchToProps)(App);
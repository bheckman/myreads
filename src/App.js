import React from 'react'
import { Route } from 'react-router-dom'
import Library from './Library'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Library />
        )}/>
        <Route path="/search" render={( history ) => (
          <Search />
        )}/>
      </div>
    )
  }
}

export default BooksApp

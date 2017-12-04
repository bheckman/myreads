import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Library from './Library'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  fetchMyBooks() {
    BooksAPI.getAll().then((books) => {
      // Build shelves
      const currentlyReading = books.filter(book => {
        return book.shelf === "currentlyReading"
      })
      const wantToRead = books.filter(book => {
        return book.shelf === "wantToRead"
      })
      const read = books.filter(book => {
        return book.shelf === "read"
      })
      this.setState({ currentlyReading, wantToRead, read })
    })
  }

  componentDidMount() {
    this.fetchMyBooks();
  }

  switchShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.fetchMyBooks());
  }

  render() {
    const { currentlyReading, wantToRead, read } = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Library
            onShelfChange={this.switchShelf}
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
            read={read}
          />
        )}/>
        <Route path="/search" render={( history ) => (
          <Search 
            onShelfChange={this.switchShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp

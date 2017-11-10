import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

class Library extends Component {

  // static propTypes = {
  //  books: PropTypes.array.isRequired,
  //  onShelfChange: PropTypes.func.isRequired
  // }

  state = {
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

  renderBookShelves (books, title) {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <Book key={book.id} onShelfChange={this.switchShelf.bind(this)} book={book}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }

  render() {
    const { currentlyReading, wantToRead, read } = this.state
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.renderBookShelves(currentlyReading, 'Currently Reading')}
            {this.renderBookShelves(wantToRead, 'Want To Read')}
            {this.renderBookShelves(read, 'Read')}
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
            >Add Book</Link>
        </div>
      </div>
    )
  }
}

export default Library

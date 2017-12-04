import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import _debounce from 'lodash/debounce'
import { Link } from 'react-router-dom'
import Book from './Book'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      books: []
    }
  }

  updateQuery = (query) => {
    this.setState({ query:query.trim() })
    this.searchBooks(query);
  }
  
  reset = (books) => {
    this.setState({ books: [] })
  }

  componentDidMount() {
    this.setState({ query: "" })
  }

  searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query, 20)
      .then((data) => {
        let books = data
        this.setState({ books: books })
      })
      .catch((error) => {
        this.reset()
      })
    } else {
      this.reset()
    }
  }

  render() {
    const { query, books } = this.state
    const { onShelfChange } = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
            >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <Book key={book.id} book={book} onShelfChange={onShelfChange} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search

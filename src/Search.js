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
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
            >Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
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
              <Book key={book.id} book={book} />
              /* <Book key={book.id} onShelfChange={this.switchShelf.bind(this)} book={book} /> */ 
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search

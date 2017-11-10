import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import Book from './Book'

class Search extends Component {
  state = {
    query: '',
    books: [],
  }

  updateQuery = (query) => {
    this.setState({ query:query.trim() })
  }

  componentDidUpdate(prevProps, prevState) {
    BooksAPI.search(this.state.query, 20)
    .then((data) => {
      let books = data
      this.setState({ books: books })
    })
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

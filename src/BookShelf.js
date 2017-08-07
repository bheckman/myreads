import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class BookShelf extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <Book />
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf

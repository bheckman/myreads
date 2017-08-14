import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.booklist.map((book) => (
                  <Book key={book.id} book={book}/>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf

import React, { Component } from 'react'

class Book extends Component {
  render() {
    const {book} = this.props;
    const bookCover = book.imageLinks ? book.imageLinks.thumbnail : '';
    const authors = book.authors ? book.authors.join(', ') : '';
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})` }}></div>
            <div className="book-shelf-changer">
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}

export default Book

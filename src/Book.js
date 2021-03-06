import React from 'react'
import PropTypes from 'prop-types'

function Book (props) {

  const { book, onShelfChange } = props;
  const bookCover = book.imageLinks ? book.imageLinks.thumbnail : '';
  const authors = book.authors ? book.authors.join(', ') : '';

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(event) => onShelfChange(book, event.target.value)} value={book.shelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  )
}

Book.propTypes = {
  book: PropTypes.object,
  onShelfChange: PropTypes.func.isRequired
}

export default Book
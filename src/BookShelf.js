import React from 'react'
import Book from './Book'

function BookShelf (props) {
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {props.booklist.map((book) => (
                <Book key={book.id} onShelfChange={props.switchShelf} book={book}/>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookShelf

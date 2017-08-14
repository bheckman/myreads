import React, { Component } from 'react'
import BookShelf from './BookShelf'

class Library extends Component {
  render() {
    const currentlyReading = this.props.books.filter(book => {
      return book.shelf === "currentlyReading"
    })
    const wantToRead = this.props.books.filter(book => {
      return book.shelf === "wantToRead"
    })
    const read = this.props.books.filter(book => {
      return book.shelf === "read"
    })
    return(
      <div>
        <BookShelf booklist={currentlyReading} title="Currently Reading" />
        <BookShelf booklist={wantToRead} title="Want To Read" />
        <BookShelf booklist={read} title="Read" />
      </div>
    )
  }
}

export default Library

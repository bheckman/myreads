import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class Library extends Component {
  render() {
    const { currentlyReading, wantToRead, read } = this.props
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf booklist={currentlyReading} title='Currently Reading' onShelfChange={this.props.onShelfChange}/>
            <BookShelf booklist={wantToRead} title='Want To Read' onShelfChange={this.props.onShelfChange}/>
            <BookShelf booklist={read} title='Read' onShelfChange={this.props.onShelfChange}/>
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

import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ShelfSwitcher extends Component {
  render() {
    return
      <select>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
  }
}

export default ShelfSwitcher

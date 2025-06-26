import React from 'react'
const BookForm = () => {
  return (
    <div className="book-form-container">
      <h2 className="book-form-title">Add a New Book</h2>
      <form className="book-form-form">
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" required />
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input type="number" id="year" name="year" required />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default BookForm

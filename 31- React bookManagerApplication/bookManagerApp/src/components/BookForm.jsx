import React from 'react'
const BookForm = () => {
const [title, setTitle] = React.useState('');
const [author, setAuthor] = React.useState('');
const [year, setYear] = React.useState('');

const handeleTitleChange= (e) => {
  setTitle(e.target.value);
}
const handleAuthorChange = (e) => {
  setAuthor(e.target.value);
}
const handleYearChange = (e) => {    
  setYear(e.target.value);
}


  return (
    <div className="book-form-container">
      <h2 className="book-form-title">Add a New Book</h2>
      <form className="book-form-form">
        <div>
          <label htmlFor="title">Title:</label>
              
          <input 
          value={title} 
          onChange={handeleTitleChange}
           type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
            
          <input 
          value={author}
          onChange={handleAuthorChange}
           type="text" id="author" name="author" required />
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          
          <input 
          value={year}
          onChange={handleYearChange}
           type="number" id="year" name="year" required />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default BookForm

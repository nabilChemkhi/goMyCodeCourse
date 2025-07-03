import React, { useState, useEffect } from "react";
import HttpClient from "../http/HttpClient";

const FormUpdate = ({ book, updateBook }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [price, setPrice] = useState(book.price);

  const reset = () => {
    setTitle("");
    setAuthor("");
    setPrice("");
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(+e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBook = {
      title,
      author,
      price,
    };

    updateBook(book.id, updatedBook);
  };

  return (
    <div className="book-form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">
            <span className="emoji">📖</span>Title
          </label>
          <input
            value={title}
            onChange={handleTitleChange}
            id="title"
            type="text"
            placeholder="Enter title"
          />
        </div>
        <div>
          <label htmlFor="author">
            <span className="emoji">✍️</span>Author
          </label>
          <input
            value={author}
            onChange={handleAuthorChange}
            id="author"
            type="text"
            placeholder="Enter Author"
          />
        </div>
        <div>
          <label htmlFor="price">
            <span className="emoji">💲</span>Price
          </label>
          <input
            value={price}
            onChange={handlePriceChange}
            id="price"
            type="number"
            placeholder="Enter Price"
          />
        </div>
        <button type="submit">
          <span className="emoji">🔺</span>
          Update Book
        </button>
      </form>
    </div>
  );
};

export default FormUpdate;

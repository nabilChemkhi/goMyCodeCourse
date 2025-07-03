import React, { useState, useEffect } from "react";
import HttpClient from "../http/HttpClient";

const BookForm = ({ onAddBook, editingBook, onUpdateBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setPrice(editingBook.price);
    } else {
      reset();
    }
  }, [editingBook]);

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

    if (editingBook) {
      const updatedBook = {
        ...editingBook,
        title,
        author,
        price,
      };
      onUpdateBook(updatedBook);
    } else {
      const book = {
        title,
        author,
        price,
      };

      //Todo: http Post request to create a new book

      // 1.update state
      onAddBook(book);
      reset();

      // 2. update the server
      HttpClient.post("/books", book)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    }
    reset();
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
          <span className="emoji">➕</span>
          {editingBook ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;

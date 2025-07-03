import React, { useState } from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import HttpClient from "../http/HttpClient";
import FormUpdate from "./FormUpdate";

const Book = ({ book, onDeleteBook, updateBook }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleDelete = (id) => {
    // 1-update ui
    onDeleteBook(id);

    // 2- updateServer
    HttpClient.delete(`/books/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const handleUpdate = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="book-card">
      <div className="book-card-header">
        <span className="book-emoji">📚</span>
        <h2 className="book-title">{book.title}</h2>
        <button className="delete-button" onClick={() => handleDelete(book.id)}>
          <FaTrash />
        </button>
        <button className="update-button">
          <FaPencilAlt onClick={handleUpdate} />
        </button>
      </div>
      <div className="book-card-body">
        <p className="book-author">
          <span className="book-icon">✍️</span> {book.author}
        </p>

        {isVisible ? <FormUpdate updateBook={updateBook} book={book} /> : null}
        <p className="book-price">
          <span className="book-icon">💲</span> {book.price}
        </p>
      </div>
    </div>
  );
};

export default Book;

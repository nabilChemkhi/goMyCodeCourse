import React from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import HttpClient from "./http/HttpClient";
import { useEffect, useState } from "react";

const App = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const getBooks = () => {
    HttpClient.get("/books")
      .then((reponse) => {
        console.log("Response:", reponse.data);
        setBooks(reponse.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  const addBook = (book) => {
    setBooks([book, ...books]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  const handleUpdateBook = (id, updatedBook) => {
    // 1- update the ui

     setBooks(
      books.map((book) => (book.id === id ? updatedBook : book))
    );

    // 2- update the server
    HttpClient.put(`/books/${id}`, updatedBook)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  useEffect(getBooks, []);
  return (
    <div>
      <BookForm
        onAddBook={addBook}
        onUpdateBook={handleUpdateBook}
        editingBook={editingBook}
      />
      <BookList
        onDeleteBook={deleteBook}
        books={books}
        onEditBook={handleEditBook}
        updateBook={handleUpdateBook}
      />
    </div>
  );
};

export default App;

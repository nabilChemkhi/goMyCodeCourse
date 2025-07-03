import React from "react";
import Book from "./Book";
const BookList = ({ books, onDeleteBook, onEditBook, updateBook }) => {
  return (
    <div>
      {books.map((book) => (
        <Book
          updateBook={updateBook}
          onDeleteBook={onDeleteBook}
          key={book.id}
          book={book}
          onEditBook={onEditBook}
        />
      ))}
    </div>
  );
};

export default BookList;

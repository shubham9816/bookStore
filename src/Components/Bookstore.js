import React, { useState } from 'react';
import BookDetail from './Bookinfo';

function Bookstore({ books }) {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || 'no-image.jpg'}
            alt={book.volumeInfo.title}
          />
          <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.authors?.join(', ')}</p>
          <button onClick={() => handleBookClick(book)}>Show Details</button>
          {selectedBook && selectedBook.id === book.id && (
            <BookDetail book={selectedBook} />
          )}
        </div>
      ))}
    </div>
  );
}


export default Bookstore;
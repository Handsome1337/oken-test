import React, { useState } from 'react';
import { BookList } from '../BookList';
import { AddBookForm } from '../AddBookForm';
import api from '../../api';

export const MainPage: React.FC = () => {
  const [books, setBooks] = useState(api.getAllBooks());
  const [isAddModeOpen, setIsAddModeOpen] = useState(false);

  const deleteBook = (id: string) => {
    api.deleteBook(id);
    setBooks([...api.getAllBooks()]);
  };

  const addBookForm = isAddModeOpen ? <AddBookForm /> : null;
  const addBookButton = (
    <button
      className={`btn mb-3 btn-${isAddModeOpen ? 'light': 'secondary'}`}
      onClick={() => setIsAddModeOpen((prevIsAddModeOpen) => !prevIsAddModeOpen)}
    >
      {isAddModeOpen ? 'Не добавлять' : 'Добавить книгу'}
    </button>
  );

  return (
    <>
      <BookList books={books} deleteBook={deleteBook} />
      {addBookButton}
      {addBookForm}
    </>
  )
};

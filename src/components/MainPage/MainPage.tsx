import React, { useState } from 'react';
import Search from '../Search';
import BookList from '../BookList';
import AddBookForm from '../AddBookForm';
import api from '../../api';
import { IBook } from '../../types'

const MainPage: React.FC = () => {
  const [books, setBooks] = useState(api.getAllBooks());
  const [isAddModeOpen, setIsAddModeOpen] = useState(false);

  const deleteBook = (id: string) => {
    api.deleteBook(id);
    setBooks([...api.getAllBooks()]);
  };

  const addBook = (book: Omit<IBook, 'id'>) => {
    api.addBook(book);
    setIsAddModeOpen(false)
    setBooks([...api.getAllBooks()]);
  };

  const addBookForm = isAddModeOpen ? <AddBookForm addBook={addBook} /> : null;
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
      <Search />
      <BookList books={books} deleteBook={deleteBook} />
      {addBookButton}
      {addBookForm}
    </>
  )
};

export default MainPage;

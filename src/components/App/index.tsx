import React from 'react';
import { BookList } from '../BookList';
import { getData } from '../../api';

export const App: React.FC = () => {
  const books = getData();

  return (
    <BookList books={books} />
  )
};

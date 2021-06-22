import React from 'react';
import { BookItem } from "../BookItem";
import { IBook } from '../../types';

interface IBookListProps {
  books: IBook[];
}

export const BookList: React.FC<IBookListProps> = ({ books }) => {
  const listItems = books.map(({ id, name }) =>
    <BookItem key={id} name={name} />
  );

  return (
    <ul className="list-group">
      {listItems}
    </ul>
  )
};

import React from 'react';
import { IBook } from '../../types';

interface IBookListProps {
  books: IBook[];
}

export const BookList: React.FC<IBookListProps> = ({ books }) => {
  const listItems = books.map(({ id, name }) =>
    <li key={id} className="list-group-item list-group-item-action">{name}</li>
  );

  return (
    <ul className="list-group">
      {listItems}
    </ul>
  )
};

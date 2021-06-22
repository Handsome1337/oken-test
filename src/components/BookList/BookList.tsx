import React from 'react';
import BookItem from '../BookItem';
import { IBook } from '../../types';

interface IBookListProps {
  books: IBook[];
  deleteBook: (id: string) => void;
}

const BookList: React.FC<IBookListProps> = ({ books, deleteBook }) => {
  const listItems = books.map(({ id, name, year }) =>
    <BookItem key={id} name={name} id={id} year={year} deleteBook={deleteBook} />
  );

  if (!listItems.length) {
    return (
      <div className="d-flex align-items-center">
        <h2 className="text-danger me-4">Книги закончились!</h2>
        <button className="btn btn-primary" onClick={() => location.reload()}>Перезагрузить</button>
      </div>
    )
  }

  return (
    <ul className="list-group mb-3">
      {listItems}
    </ul>
  )
};

export default BookList;

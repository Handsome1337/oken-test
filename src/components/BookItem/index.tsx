import React from 'react';
import { Link } from 'react-router-dom';

interface IBookItemProps {
  id: string;
  name: string;
  year: number;
  deleteBook: (id: string) => void;
}

export const BookItem: React.FC<IBookItemProps> = ({ name, id, year, deleteBook } ) => {
  return (
    <li className="list-group-item list-group-item-action d-flex align-items-center">
      {name}&nbsp;
      <span className="fst-italic fw-light">({year})</span>
      <div className="ms-auto">
        <Link to={`/book/${id}`} className="btn btn-primary me-3">Подробнее</Link>
        <button className="btn btn-danger" onClick={() => deleteBook(id)}>Удалить</button>
      </div>
    </li>
  )
};

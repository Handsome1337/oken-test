import React from 'react';
import { IBook } from '../../types';

interface IBookInfoProps {
  book: IBook;
}

export const BookInfo: React.FC<IBookInfoProps> = ({ book: { name, description, year } }) => {
  return (
    <section>
      <div className="d-flex justify-content-between align-items-center">
        <h2>
          {name}&nbsp;
          <span className="fst-italic fw-light">{year}</span>
        </h2>
        <a className="btn btn-primary">Назад</a>
      </div>
      <p className="fs-4">{description}</p>
    </section>
  )
};

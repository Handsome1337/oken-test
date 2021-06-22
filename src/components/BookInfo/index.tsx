import React from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../api';

interface IRouteParams {
  id: string;
}

export const BookInfo: React.FC = () => {
  const { id } = useParams<IRouteParams>();
  const book = new Api().getBook(id);

  if (!book) {
    return <h2 className="text-danger">Книга не найдена!</h2>;
  }

  const { name, description, year } = book;

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

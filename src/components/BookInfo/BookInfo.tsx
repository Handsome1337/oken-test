import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import BackButton from '../BackButton';
import api from '../../api';

interface IRouteParams {
  id: string;
}

const BookInfo: React.FC = () => {
  const { id } = useParams<IRouteParams>();
  const book = api.getBook(id);


  if (!book) {
    return <NotFound text="Книга не найдена!" />
  }

  const { name, description, year } = book;

  return (
    <section>
      <div className="d-flex justify-content-between align-items-center">
        <h2>
          {name}&nbsp;
          <span className="fst-italic fw-light">({year})</span>
        </h2>
        <BackButton />
      </div>
      <p className="fs-4">{description}</p>
    </section>
  )
};

export default BookInfo;

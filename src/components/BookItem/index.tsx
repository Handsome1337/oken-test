import React from 'react';

interface IBookItemProps {
  name: string;
}

export const BookItem: React.FC<IBookItemProps> = ({ name } ) => {
  return (
    <li className="list-group-item list-group-item-action d-flex align-items-center">
      {name}
      <div className="ms-auto">
        <a className="btn btn-primary me-3">Подробнее</a>
        <button className="btn btn-danger">Удалить</button>
      </div>
    </li>
  )
};

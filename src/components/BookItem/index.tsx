import React from 'react';

interface IBookItemProps {
  name: string;
}

export const BookItem: React.FC<IBookItemProps> = ({ name } ) => {
  return (
    <li className="list-group-item list-group-item-action">{name}</li>
  )
};

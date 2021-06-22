import React from 'react';
import { BackButton } from '../BackButton';

interface INotFoundProps {
  text: string;
}

export const NotFound: React.FC<INotFoundProps> = ({ text }) => {
  return (
    <div className="d-flex align-items-center">
      <h2 className="text-danger me-4">{text}</h2>
      <BackButton />
    </div>
  )
};

import React from 'react';
import { IBook } from '../../types';

export interface IFormFields {
  name: { value: string; };
  year: { value: string; };
  description: { value: string; };
}

interface IAddBookFormProps {
  addBook: (book: Omit<IBook, 'id'>) => void;
}

export const AddBookForm: React.FC<IAddBookFormProps> = ({ addBook }) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const target = evt.target as typeof evt.target & IFormFields;

    const book = {
      name: target.name.value,
      year: parseInt(target.year.value, 10),
      description: target.description.value
    }

    addBook(book);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="form-control mb-3" name="name" placeholder="Название книги" required />
      <input type="number" className="form-control mb-3" name="year" placeholder="Год выпуска (цифровое значение)" required />
      <textarea rows={7} className="form-control mb-3" name="description" placeholder="Описание" required />
      <button type="submit" className="btn btn-success">Добавить</button>
    </form>
  )
};

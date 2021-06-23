import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import api from '../../api';
import { IBook } from '../../types';

const Search: React.FC = () => {
  const [foundBooks, setFoundBooks] = useState<IBook[]>([]);
  const inputEl = useRef<HTMLInputElement>(null);

  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => search(evt.target.value);

  const search = debounce((searchValue: string | undefined) => {
    if (searchValue) {
      setFoundBooks(api.findBooksByDescription(searchValue));
    } else {
      setFoundBooks([]);
    }
  }, 750);

  const notFound = inputEl.current?.value
    ? <p className="text-danger">Ничего не найдено!</p>
    : null;

  const foundBooksList = foundBooks.length
    ? (
        <ul className="list-group">
          {foundBooks.map((book) => (
            <li className="list-group-item list-group-item-action p-0" key={book.id}>
              <Link to={`/book/${book.id}`} className="btn btn-sm w-100 text-start">
                {book.name}
              </Link>
            </li>
          ))}
        </ul>
    )
    : notFound;

  return (
    <div className="mb-3">
      <input ref={inputEl} type="text" className="form-control" onChange={handleSearch} placeholder="Поиск книги по описанию" />
      {foundBooksList}
    </div>
  )
};

export default Search;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BookList } from '../BookList';
import { BookInfo } from '../BookInfo';
import { NotFound } from '../NotFound';
import api from '../../api';

export const App: React.FC = () => {
  const books = api.getAllBooks();

  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <BookList books={books} />} exact />
        <Route path="/book/:id" component={BookInfo} />
        <Route render={() => <NotFound text="Страница не найдена!" />} />
      </Switch>
    </Router>
  )
};

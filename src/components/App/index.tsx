import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BookList } from '../BookList';
import Api from '../../api';
import { BookInfo } from "../BookInfo";

export const App: React.FC = () => {
  const books = new Api().getAllBooks();

  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <BookList books={books} />} exact />
        <Route path="/book/:id" component={BookInfo} />
        <Route render={() => <h2 className="text-danger">Страница не найдена!</h2>} />
      </Switch>
    </Router>
  )
};

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from '../MainPage';
import { BookInfo } from '../BookInfo';
import { NotFound } from '../NotFound';

export const App: React.FC = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/book/:id" component={BookInfo} />
        <Route render={() => <NotFound text="Страница не найдена!" />} />
      </Switch>
    </Router>
  )
};

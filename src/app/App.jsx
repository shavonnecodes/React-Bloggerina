import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { Homepage } from './Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export const App = () => (
  <>
  <Router>
    <Switch>
      {/* <Route path="/add" component={MovieEditor} />
      <Route path="/update/:movieId" component={MovieEditor} />
      <Route path="/movies/:movieId" component={SingleMovieViewer} /> */}
      <Route path="/" component = { Homepage } />
    </Switch>
  </Router>
  </>
  );


import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Homepage } from './Homepage';
import { BlogEditor } from './BlogEditor';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

library.add(fas, faSearch);

export const App = () => (
  <>
  <Router>
    <Switch>
      <Route path="/create" component={BlogEditor} />
      <Route path="/update/:entryId" component={BlogEditor} />
      {/* <Route path="/movies/:movieId" component={SingleMovieViewer} /> */}
      <Route path="/" component = { Homepage } />
    </Switch>
  </Router>
  </>
  );


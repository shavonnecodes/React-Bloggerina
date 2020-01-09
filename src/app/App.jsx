import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Homepage } from './Homepage';
import { AddToBlog } from './AddToBlog';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { DetailsPage } from './DetailsPage';
import { BlogEntryEditList } from './BlogEntryEditList';
import { UpdateTheBlog } from './UpdateTheBlog';

library.add(fas, faSearch);

export const App = () => (
  <>
  <Router>
    <Switch>
      <Route path="/create" component={ AddToBlog } />
      <Route path="/edit" component={ BlogEntryEditList } />
      <Route path="/update/:entryId" component={ UpdateTheBlog } />
      <Route path="/entries/:entryId" component={ DetailsPage } />
      <Route path="/" component = { Homepage } />
    </Switch>
  </Router>
  </>
  );


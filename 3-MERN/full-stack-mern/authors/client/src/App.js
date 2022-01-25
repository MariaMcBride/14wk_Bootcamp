import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Main from './views/Main';
import AddAuthor from './views/AddAuthor'
import UpdateAuthor from './views/UpdateAuthor';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto m-5">
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/new'>
            <AddAuthor />
          </Route>
          <Route exact path='/update/:id'>
            <UpdateAuthor />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

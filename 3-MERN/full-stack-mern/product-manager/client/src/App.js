import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import UpdateProduct from './views/UpdateProduct';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto m-5">
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/:id'>
            <ProductDetail />
          </Route>
          <Route exact path='/update/:id'>
            <UpdateProduct />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

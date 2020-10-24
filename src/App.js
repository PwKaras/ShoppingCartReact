import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CartView from './views/CartView';
import CartCompletedView from './views/CartCompletedView';

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/cart" exact component={CartView} />
      <Route path="/cart/completed" component={CartCompletedView} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;

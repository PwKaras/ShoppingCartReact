import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartView from './views/CartView';
import CartCompletedView from './views/CartCompletedView';
import { CartContext } from './context/CartContext';
import CartProvider from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/cart" exact component={CartView} />
          <Route path="/cart/completed" component={CartCompletedView} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

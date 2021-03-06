import React from 'react';
import './style.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './page/Navigation';
import ShoppingCart from './page/ShoppingCart';
import Home from './page/Home/Index';
import Detail from './page/Detail';

export default function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/shop" exact>
            <ShoppingCart />
          </Route>
          <Route path="/product/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

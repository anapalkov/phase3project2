import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductListPage from './components/ProductListPage';
import CategoryList from './components/CategoryList';
import Header from './components/Header'
import CartPage from './components/CartPage'

import './App.css';

function App() {
  return (
    // <div className="App">
    //   <ProductListPage />
    // </div>
          
    <Router>
      <div>
        <Header />
        <ul>
          <li>
            <Link to="/">Product List</Link>
          </li>
          <li>
            <Link to="/categories">Category List</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        
        </ul>

        <Switch>
          
          <Route path="/categories">
            <CategoryList />
          </Route>

          <Route path="/">
            <ProductListPage />
          </Route>

          <Route path="/cart">
            <CartPage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

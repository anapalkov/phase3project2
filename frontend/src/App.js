import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import ItemContainer from './components/ItemContainer';
import CategoryListPage from './components/CategoryListPage';
import Header from './components/Header'
import CartPage from './components/CartPage'
import ItemPage from './components/ItemPage'

import './App.css';

function App() {

  const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("http://localhost:9393/products")
      .then(r => r.json())
      .then(data => {
          // console.log("data from useEffect", data);
          setProducts(data);
      })
  }, [])

  
  return (
          
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
            <CategoryListPage />
          </Route>

          <Route path="/cart">
            <CartPage />
          </Route>

          {/* <Route path="/item/${id}">
            <ItemDetails />
          </Route> */}

          <Route path="/item/:itemId" render={(props) =>  {
            let itemId = props.match.params.itemId
            const currentItem = products.find(x => x.id == parseInt(itemId))
            console.log("this is the current item we're sending: " , currentItem)
            return <ItemPage currentItem = {currentItem}/> 
          }
            }/>
            
          

          <Route path="/">
            <ItemContainer products = {products}/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

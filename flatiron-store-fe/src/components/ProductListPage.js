import React from 'react';
import Header from './Header'
import NavBar from './NavBar'
import ItemContainer from './ItemContainer'
import Search from './Search'
import {useState, useEffect} from 'react'

// Contains Header + Categories Filter + Search Bar + NavBar + ItemContainer
// will need a way to populate products from database and pass as a prop

function ProductListPage() {
    const [products, setProducts] = useState([]);
    const [searchText, setSearch] = useState("")
    
    useEffect(() => {
        fetch("http://localhost:9393/products")
        .then(r => r.json())
        .then(data => {
            console.log("data from useEffect", data);
            setProducts(data);
        })
    }, [])

    return (
        <div>
            <Header />
            <NavBar />
            
            <h5>Product List Page</h5>
            <Search setSearch={setSearch}/>
            <ItemContainer products={products}/>
        </div> 
        )
  }
  
  export default ProductListPage;
import React from 'react';
import ItemContainer from './ItemContainer'
import Search from './Search'
import {useState, useEffect} from 'react'


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
        <h5>Product List Page</h5>
        <Search setSearch={setSearch}/>
        <ItemContainer products/>          
      </div> )
  
}
  
  export default ProductListPage;
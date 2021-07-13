import React from 'react';
import Header from './Header'
import NavBar from './NavBar'
import ItemContainer from './ItemContainer'
import Search from './Search'
import {useState} from 'react'

// Contains Header + Categories Filter + Search Bar + NavBar + ItemContainer
// will need a way to populate products from database and pass as a prop

function ProductListPage() {

// fetch request for products
 //fetch('localhost:9393/products', {
     headers: {
         "Accept": "application/json"
         "Content-Type": "application/json"
     }.then(response => response.json())
     .then (res => products)


 const [searchText, setSearch] = useState("")
 return (
      <div>
        <Header />
        <NavBar />
        
        <h5>Product List Page</h5>
        <Search setSearch={setSearch}/>
        <ItemContainer products/>          
      </div> )
  }
  
  export default ProductListPage;
import React from 'react';
import Header from './Header'
import NavBar from './NavBar'

import Search from './Search'
import CategoryContainer from './CategoryContainer'

import {useState, useEffect} from 'react'

// Contains Header + Categories Filter + Search Bar + NavBar + ItemContainer
// will need a way to populate products from database and pass as a prop

function ProductListPage() {
    const [categories, setCategories] = useState([]);
    const [searchText, setSearch] = useState("")
    
    useEffect(() => {
        fetch("http://localhost:9393/categories")
        .then(r => r.json())
        .then(data => {
            console.log("data from useEffect", data);
            setCategories(data);
        })
    }, [])

    return (
        <div>
            <Header />
            <NavBar />
            
            <h1>Category List Page</h1>
            <Search setSearch={setSearch}/>
            <CategoryContainer categories={categories}/>
        </div> 
        )
  }
  
  export default ProductListPage;
import React from 'react';
import Header from './Header'

import Search from './Search'


import {useState, useEffect} from 'react'

// Contains Header + Categories Filter + Search Bar + NavBar + ItemContainer
// will need a way to populate products from database and pass as a prop

function CategoryListPage(props) {
    const [categories, setCategories] = useState([]);

    const [products, setProducts] = useState([]);

    
    useEffect(() => {
        fetch("http://localhost:9393/categories")
        .then(r => r.json())
        .then(data => {
            console.log("data from useEffect", data);
            setCategories(data);
        })
    }, [])

    //display products by category id
    function handleChange(event) {
        // console.log(event.target)
        const select = event.target;
        const id = select.children[select.selectedIndex].id;
        
        fetch(`http://localhost:9393/cat/${id}/prods`)
        .then(r => r.json())
        .then(data => {
            console.log("product",data);
            setProducts(data);
        })
      }


    return (
        <div>
            
        <h1>Category List Page</h1>
            <select onChange={handleChange}>
                {categories.map(category => <option key={category.id} id ={category.id} >{category.name}</option>)}
          </select>

          {products.length > 0? products.map(cat => <li key={cat.id}> {cat.product.name}</li>) : <p>No products</p>}

        </div> 
    )
  }
  
  export default CategoryListPage;
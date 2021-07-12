import React from 'react';
import Item from './Item'

// for loop displaying filtered (?) items list

function displayProducts({products}){
    let itemList = products.map(product => <Item product={product}/>)

}


// where does the search bar go?
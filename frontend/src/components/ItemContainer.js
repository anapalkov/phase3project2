import React from 'react';
import Item from './Item'

// for loop displaying filtered (?) items list

function ItemContainer({products}){

     
    return (
    <div>
     <h5>Item Container</h5>
        {products.map(product => <Item key={product.id} {...product}/>) }
     </div>
     )

}

export default ItemContainer

// where does the search bar go? Nightclub.
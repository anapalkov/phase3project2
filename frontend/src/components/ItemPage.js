import React from "react";
 
function ItemPage(props){

    console.log(props.currentItem)
    return (
        <div className="card">
          <h1>ITEM</h1>
          
        <ul>
          <li>{props.currentItem.id}</li>
          <li>{props.currentItem.name}</li>
          <li>{props.currentItem.price}</li>
          <button>Add to Cart</button>        
          </ul>
        </div>
      )
}

export default ItemPage
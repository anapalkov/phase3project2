import React from "react";
 import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from "react-router-dom";

function Item({id, name, price}){

  // let match = useRouteMatch();

    return (
        <div className="card">
          <h1>{id}</h1>
          
        <ul>
          <li>
            <Link to={`/item/${id}`}>{name}</Link>
            
            </li>
          </ul>
        </div>
      )
}

export default Item


  // WRITE A handleAddToCart

  // By clicking on the add to the cart, a temporary array of state should hold the date, once clicked on the purchase button will
  //submit to the database.


    // let handleDelete = (e) => {
    //     fetch(`http://localhost:9292/toys/${id}`, {
    //         method: "DELETE"
    //     })
    //         .then(res => res.json())
    //         .then(() => {
    //             deleteToy(id)
    //         })
    // }


  

    // let handleLike = (e) => {
    //     fetch(`http://localhost:9292/toys/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             likes: likes + 1
    //         })
    //     })
    //         .then(res => res.json())
    //         .then((updatedToy) => {
    //             updateToy(updatedToy)
    //         })
    // }
import React from "react";

function Item({id, name, price}){

    return (
        <div className="card">
          <ul>
            {/* create table to render the items nicely.  */}
            <li>{id} || {name} || {price}</li>
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
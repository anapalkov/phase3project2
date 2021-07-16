import React from 'react'
import UserProduct from './UserProduct'
import {useState, useEffect} from 'react'



function CartPage() {   
    // fetch list of users from backend
    const [users, setUsers] = useState([])
    const [getProducts, setProducts] = useState([]);

    
    const [filterUser, setFilterUser] = useState([])

    useEffect(() => {
        fetch("http://localhost:9393/users")
        .then(r => r.json())
        .then(data => {
            // console.log("fetch data",data);
            setUsers(data);
        })
    }, [])

    function handleChange(event) {
        // console.log(event.target)
        const select = event.target;
        const id = select.children[select.selectedIndex].id;
    
        fetch(`http://localhost:9393/user/${id}/products/`)
        .then(r => r.json())
        .then(data => {
            // console.log("Orders",data);
            setProducts(data);
        })
    
      }
    
    
    return ( 
        <div>
        <h1>CART</h1>
        
         {/* {users.map((user) => <UserProduct key={user.id} {...user}/>)} */}   
         <select onChange={handleChange}>
            {users.map(u => <option key={u.id} id ={u.id} >{u.full_name}</option>)}
          </select>
      
        { getProducts.length > 0? getProducts.map((product) => <li key={product.id}>{product.product.name}</li>)  : <p>No products in this cart.</p> }

            
        </div>
    )
}
export default CartPage;
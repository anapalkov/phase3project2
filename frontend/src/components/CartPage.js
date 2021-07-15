import React from 'react'
import User from './User'
import {useState, useEffect} from 'react'
function CartPage() {   
    // fetch list of users from backend
    const [users, setUsers] = useState([])
    const [filterUser, setFilterUser] = useState([])
    useEffect(() => {
        fetch("http://localhost:9393/users")
        .then(r => r.json())
        .then(data => {
            // console.log("fetch data",data);
            setUsers(data);
        })
    }, [])
    return ( 
        <div>
        <h1>CART</h1>
        {users.map((user) => <User key={user.id} {...user}/>)}
        {/* <select >
            {users.map((user) => <option key={user.id}>{user.full_name}</option>)}
        </select>; */}
            {/* <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select> */}
        </div>
    )
}
export default CartPage;
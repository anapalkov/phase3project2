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
       
       
       
        {/* {<select>
        <option value="test22">test2</option>
        <option value="test33">test3</option>
        <option value="test44">test4</option>
        <option value="test55">test5</option>
        </select>
         */}
        
        
        /* <select >
            {users.map((user) => <option key={user.id}>{user.full_name}</option>)}

        {/* event listener that gets option */}




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
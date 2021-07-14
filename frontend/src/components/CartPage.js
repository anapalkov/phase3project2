// import React from 'react';

//import { Dropdown, Selection } from 'react-dropdown-now';
import {useState, useEffect} from 'react'

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function CartPage() {   
    
    // fetch list of users from backend
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9393/users")
        .then(r => r.json())
        .then(data => {
            console.log("users", users.first.full_name);
            setUsers(users);
        })
    }, [])
    
    // select an ID
    
    
    
    // fetch to http://localhost:9393/users/10/orders





    return <div>
        <span>CART</span>

            {users.map(user => <span>{user.full_name}</span>)}
    
  
  {/* <DropdownButton id="dropdown-basic-button" title="Pick A User">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton> */}
    
    



    </div>


}

export default CartPage;

    // export function Option(props) {
    //   return (
    //     <StyledOption selected={props.selected}>
    //       {props.value}
    //     </StyledOption>
    //   );
    // }

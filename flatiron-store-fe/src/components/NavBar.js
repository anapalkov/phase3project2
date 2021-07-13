import React from 'react';

function NavBar(){
// 2 buttons, Product Page and Cart Page

    return (
    <div>
    <button className="ui button" type="submit">
            Product Page
            </button>

    <button className="ui button" type="submit">
            Cart
    </button>
    </div>)
}
// changes state when clicked to display other page

export default  NavBar
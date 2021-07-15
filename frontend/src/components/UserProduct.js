import React, {useState, useEffect} from 'react'

export default function UserProduct({id, full_name}) {
    const [getProducts, setProducts] = useState([]);
    
    //Ask Adam about useEffect and how to integerate in this page.

    function test(e) {
        // console.log(e.firstChild.data)
        id = parseInt(e.firstChild.data)
        fetch(fetch(`http://localhost:9393/user/${id}/products/`)
        .then(r => r.json())
        .then(data => {
            console.log("fetch data from user-order-product",data);
            setProducts(data);
        }))
    }
    return (
        <div>
            <span>
                <li onClick={e => test(e.target)}>{id} {full_name}</li>
            </span>
            { getProducts.length > 0? <select> {getProducts.map((product) => <option key={product.id}>{product.product.name}</option>)} </select>:null }
        </div>
    )
}
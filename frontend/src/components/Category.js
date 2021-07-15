import React, {useState, useEffect} from 'react'

export default function Category({id, name}) {
    const[getCategories, setCategories] = useState([])
    



    function click(e) {
        const select = e.target;
        const id = select.children[select.selectedIndex].id;

        fetch(`http://localhost:9393/cat/${id}/prods`)
        .then(r => r.json())
        .then(data => {
            console.log("fetch data from product_categories",data);
            setCategories(data);
        })
    }

    


    return (
        <div>
            <span>
                <li onClick={e => click(e.target)}>{id} {name}</li>
            </span>
            { 
                getCategories.length > 0? <select>{getCategories.map(category =><option id={category.id} key={category.id}>{category.product.name}</option>) } </select> : <span>No category</span> 
            }
        </div>
    )
}

import React, {useState, useEffect} from 'react'

export default function Category({id, name}) {
    const[getCategories, setCategories] = useSate([])
    


    
    // useEffect(() => {
    //     fetch(`http://localhost:9393/cat/${id}/prods`)
    //     .then(r => r.json())
    //     .then(data => {
    //         console.log("data from useEffect", data);
    //         setCategories(data);
    //     })
    // }, [])


    function test(e) {
        // console.log(e.firstChild.data)
        id = parseInt(e.firstChild.data)
        fetch(`http://localhost:9393/cat/${id}/prods`)
        .then(r => r.json())
        .then(data => {
            console.log("fetch data from product_categories",data);
            setCategories(data);
        }))
    }




    return (
        <div>
            <span>
                <li onClick={e => test(e.target)}>{name}</li>
            </span>
            { getCategories.length > 0? <select> {getCategories.map((category => <option key={category.id}>{category.category.name}</option>)} </select>:null }
        </div>
    )
}

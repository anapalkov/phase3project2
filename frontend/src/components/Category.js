import React from 'react'

export default function Category({id, name}) {
    return (
        <div>
            <span>{name}</span>
            {/* By clicking a category will show a list products under this category */}
            {/* Category.first.products => find eq => in React */}
        </div>
    )
}

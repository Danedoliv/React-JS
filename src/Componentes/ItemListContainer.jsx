import React from 'react'

const ItemListContainer = ({children,greeting}) => {
    return (
        <div className="container-fluid border border-dark" style={{minHeight:"100vh"}}>
            {children}
           <h1> {greeting} </h1>
        </div>
    )
}

export default ItemListContainer
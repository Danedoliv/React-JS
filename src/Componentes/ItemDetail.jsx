import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Item from './Item'
import ItemCount from './ItemCount'

export default  function ItemDetail({ item }) {
 
    return (
        <div className="col col-md-6 col-lg-4 my-2"> 
        <div className="card">
           <img src={item.img} className="card-img-top" alt="..."/>
           <div className="card-body">
               <h5 className="card-title text-uppercase">{item.name}</h5>
               <h5 className="card-subtitle mb-2 text-muted text-uppercase">{item.category}</h5>
               <p className="card-text fs-3">${item.price}</p>
              
           </div>
            <ItemCount/>
            <NavLink to="/cart" className="btn my-3 btn-primary">Buy</NavLink>
        </div>

    </div> 
    )
   
  }
  

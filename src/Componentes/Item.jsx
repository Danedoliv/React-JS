import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ItemCount from './ItemCount'


export default function Item({item}) {
    return (
     <div className="col col-md-6 col-lg-4 my-2"> 
         <div className="card">
            <img src={item.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-uppercase">{item.name}</h5>
                <h5 className="card-subtitle mb-2 text-muted text-uppercase">{item.category}</h5>
                <p className="card-text fs-3">${item.price} </p>
                <NavLink to="/item/id:" className="btn btn-primary w-100 my-2 text-uppercase">Show detail</NavLink>
                <ItemCount stock={item.stock} initial={1} item={item}/>
            </div>
            
         </div>
         
     </div>  
    )
}
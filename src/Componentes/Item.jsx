import React from 'react'
import { Link } from 'react-router-dom';


export default function Item({item}) {
    return (
     <div className="col col-md-6 col-lg-4 my-2"> 
         <div className="card">
            <img src={item.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-uppercase">{item.name}</h5>
                <h5 className="card-subtitle mb-2 text-muted text-uppercase">{item.category}</h5>
                <p className="card-text fs-3">${item.price} </p>
                <Link to="/item:id">CLick</Link>
            </div>
         <button className="btn btn-warning w-100 my-2 text-uppercase">Show detail</button>
         </div>
     </div>  
    )
}
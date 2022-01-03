import React, { useState } from 'react';
import { CarritoConsumer } from './CartContext';

const ItemCount = ({stock, initial, item}) => {

  

   const [cantidad, setCantidad] = useState(initial)

   const agregarCantidad = () => setCantidad(cantidad + 1)

      
   

   const reducirCantidad = () => setCantidad(cantidad - 1)
   

  

       return (
         <div className="container mx-auto w-100 my-5">
            <div className="border my-3">
               <p className="text-muted fs-5 text-center">Stock : {stock}</p>
            </div>
            <div className="d-flex justify-content-around w-100">
               <button onClick={reducirCantidad} className="btn btn-success">-</button>
               <h5 className="fs-5">{cantidad}</h5>
               <button onClick={agregarCantidad} className="btn btn-success py-0">+</button>
            </div>
            <div className="row">
               <button className="btn btn-primary text-uppercase my-4">Agregar al Carrito</button>
            </div>
         </div>
      )
   }
  

export default ItemCount
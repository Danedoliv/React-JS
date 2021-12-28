import React, { useState } from 'react';

const ItemCount = ({stock, initial}) => {

   const [cantidad, setCantidad] = useState(initial)

   const agregarCantidad = () => {

      if(cantidad < stock) {
         setCantidad(cantidad++);
      }
   }

   const reducirCantidad = () => {
      if(cantidad < 2) {
         setCantidad(cantidad++)
      }
   }

  

       return (
         <div className="container mx-auto w-100 my-5">
            <div className="border my-3">
               <p className="text-muted fs-5 text-center">Stock : {stock}</p>
            </div>
            <div className="d-flex justify-content-around w-100">
               <button className="btn btn-success">-</button>
               <h5 className="fs-5">{cantidad}</h5>
               <button className="btn btn-success py-0">+</button>
            </div>
            <div className="row">
               <button className="btn btn-primary text-uppercase my-4">Agregar al Carrito</button>
            </div>
         </div>
      )
   }
  

export default ItemCount
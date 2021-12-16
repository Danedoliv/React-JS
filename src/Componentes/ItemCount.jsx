import React, { useState } from 'react';


  
  function ItemCount({ stock , initial, children }) {
       const [count, setCount] = useState(initial);
      
       if (stock < count) {
          setCount(0)
       } 

       return (
         <div className="container text-center">
            <p> <i className="fas fa-shopping-cart"></i> {count} </p>
            
           <button onClick={() => setCount(count + 1)}>Agregar</button>
           <button onClick={() => setCount(count - 1)}> Restar </button>
           {children}
         </div>
      );
     }
  

export default ItemCount
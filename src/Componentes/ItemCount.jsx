import React, { useState } from 'react';



  
  function ItemCount({ stock, initial, children }) {
       const [count, setCount] = useState(initial);
        
    function onAdd () {
        if(count <= stock) {
            setCount(count + 1)
        }
    }
    
       return (
         <div className="container text-center">
            <p> {count}</p>
           <button onClick={() => onAdd}>Agregar</button>
           <button onClick={() => setCount(count - 1)}> Restar </button>

           {children}
         </div>
      );
     }
  

export default ItemCount
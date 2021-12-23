import React, { useState } from "react";

const Prueba = () => {

    const [ state, setState] = useState ("No esta clickeado")




    
    return (    
        <div>
             <h1> {state} </h1>
            <button> CLICKEA </button>
        </div>

    )
}

export default Prueba 
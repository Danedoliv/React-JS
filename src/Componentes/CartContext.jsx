import {createContext, useContext, useState} from "react";

export const CarritoContext = createContext()
export const CarritoConsumer = () => useContext(CarritoContext)


const CartContext = ({children}) => {


const [carrito, setCarrito] = useState([])


    function addCarrito (item) {
        setCarrito([...carrito, item]);
    }

    return(
        <CarritoContext.Provider value={[
            carrito,setCarrito,addCarrito]}>
            {children}
        </CarritoContext.Provider>
    )
}

export default CartContext
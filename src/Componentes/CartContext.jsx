import {createContext, useContext, useState} from "react";

 const CarritoContext = createContext()
export const CarritoConsumer = () => {
    useContext(CarritoContext)
}

const CartContext = ({children}) => {


const [carrito, setCarrito] = useState([])


    function addCarrito (item,cantidad) {
        let nuevoItem = {
            ...item,
            cantidad
        }
        setCarrito([...carrito, nuevoItem])
    }

    return(
        <CarritoContext.Provider value={[
            carrito,setCarrito,addCarrito]}>
            {children}
        </CarritoContext.Provider>
    )
}

export default CartContext
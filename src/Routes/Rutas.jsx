import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prueba from "../Views/Prueba"
import ItemDetailContainer from "../Componentes/ItemDetailContainer";
import ItemListContainer from "../Componentes/ItemListContainer";
import NavBar from "../Componentes/NavBar";
import Cart from "../Views/Cart";
import CartContext from "../Componentes/CartContext"

export default function Rutas() {
    return (
        <BrowserRouter>
        <NavBar/>
        <CartContext>
        <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/prueba" element={<Prueba/>}/>
        <Route path="/cart" element={<Cart/>} />
        </Routes>
        </CartContext>    
        </BrowserRouter>
    )
}
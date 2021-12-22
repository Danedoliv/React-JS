import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "../Componentes/ItemDetailContainer";
import ItemListContainer from "../Componentes/ItemListContainer";
import NavBar from "../Componentes/NavBar";

export default function Rutas() {
    return (
        <BrowserRouter>
        <NavBar/>
            
        <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
           
        </Routes>
        </BrowserRouter>
    )
}
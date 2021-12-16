import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "../Componentes/ItemDetailContainer";
import ItemListContainer from "../Componentes/ItemListContainer";
import NavBar from "../Componentes/NavBar";
import Category from "../Views/Category";
import Home from "../Views/Home";

export default function Rutas() {
    return (
        <BrowserRouter>
       
        <Routes>
           <Route patch="/" element={<ItemListContainer/>}/>
           <Route path="/category/:id" element={<ItemListContainer/>}/>
           <Route path="/item:id" element={<ItemDetailContainer/>}/>
            
        </Routes>


        </BrowserRouter>
    )
}
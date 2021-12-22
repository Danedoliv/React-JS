import React from "react";
import {Link} from 'react-router-dom'

export default function Category () {
    return (
        <h1>
            <li>
            <Link to={'/category'}>Categorias</Link>
            </li>
            
        </h1>
    )
}
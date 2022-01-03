import React from 'react'
import { Link } from 'react-router-dom';
import {CarritoConsumer} from '../Componentes/CartContext'

function CartWidget() {



    return (
        <Link to="/cart" className="btn btn-primary">
        <div className="d-flex align-items-center p-2 mx-3">
            <i className="fas fa-shopping-cart"></i>
            <span className="text=light fs-5 mx-4">0</span>
        </div>
        </Link>
    )
}

export default CartWidget
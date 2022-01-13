import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar () {
    return (
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to=" /category/:categoryid" className="nav-link active" aria-current="page" >Category</Link>
                    </li>
                    <CartWidget/>
            </ul>
            </div>
            </div>
             
        </nav>
    )
}

export default NavBar;

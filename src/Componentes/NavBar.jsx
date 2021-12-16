import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';


function NavBar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            
            <div className="container-fluid d-flex justify-content-center">
            <Link to="/" className="navbar-brand"> EDM Lab </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
             <div className="navbar-nav">
                <NavLink to="/category" className="nav-link active">Category</NavLink>
                
            </div>
             </div>
            </div>
            
        </nav>
    )
}

export default NavBar;

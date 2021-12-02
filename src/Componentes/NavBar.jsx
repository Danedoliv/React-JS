import React from 'react'
import CartWidget from './CartWidget';


function NavBar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
          <CartWidget/>  
            <div className="container-fluid d-flex justify-content-between">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
             <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link active" href="#">Features</a>
                <a className="nav-link active" href="#">Pricing</a>
                <a className="nav-link active" href="#">Pictures</a>
            </div>
             </div>
            </div>
            
        </nav>
    )
}

export default NavBar;

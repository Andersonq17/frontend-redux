import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg'

function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">
        <img src={logo} width="30" height="30" alt=""/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <Link to="/" className="nav-link">Listar Posts</Link>
            </li>
            <li className="nav-item">
                <Link to="/crear" className="nav-link">Crear Nuevo</Link>
            </li>
            </ul>
        </div>
</nav>
    )
}

export default Navbar;

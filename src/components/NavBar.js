import React from 'react';
import './NavBar.css'
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <a className="navbar-brand" href="/"><img className="home-img" alt='cinemaicon'
                        src={require('../cinema.png')} /><span className='home-text'>Home</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search Movie..." aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">GO!</button>
                </form>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link about" href="/">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
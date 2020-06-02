import React, {useState, useContext} from 'react';
import './NavBar.css'
import { withRouter, Link } from 'react-router-dom'
import { MoviesContext } from '../context/MoviesContext'

const NavBar = (props) => {
    const [movieInput, setMovieInput] = useState('')
    const {fetchMovieDetails} = useContext(MoviesContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <Link className="navbar-brand"  to='/'><img className="home-img" alt='cinemaicon'
                        src={require('../cinema.png')} /><span className='home-text'>Home</span></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                

                <form onSubmit={ e => {
                    e.preventDefault()
                    fetchMovieDetails(movieInput)
                    props.history.push(`/${movieInput}`)
                    
                    
                }} className="form-inline my-2 my-lg-0">
                    <input value={movieInput} onChange={e => {
                        setMovieInput(e.target.value)
                    }} className="form-control mr-sm-2" type="search" placeholder="Search Movie..." aria-label="Search" />
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

export default withRouter(NavBar);
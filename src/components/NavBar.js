import React, { useState, useContext, useRef, useEffect } from 'react';
import './NavBar.css'
import { withRouter, Link } from 'react-router-dom'
import { MoviesContext } from '../context/MoviesContext'
import MovieSearchCard from './MovieSearchCard'


const NavBar = (props) => {
    const [movieInput, setMovieInput] = useState('')
    const [timeoutId, setTimeoutId] = useState()
    const { fetchMovieSearchList, setMovieSearchListIsFetching, fetchMovieSearchListPage } = useContext(MoviesContext)
    const [dropdownMenu, setdropdownMenu] = useState('')
    // const [slide, setSlide] = useState(0)
    // const [lastScrollY, setLastScrollY] = useState(0)

    //por algum motivo esta renderizando no scroll
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
      
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll)
    //     }
    //     //  eslint-disable-next-line react-hooks/exhaustive-deps
    //   }, [])

    // const handleScroll = e => {
    //     let currentScrollY = window.scrollY;
       

    // if (currentScrollY > lastScrollY) {
    //   setSlide(-58)
    // } else {
    //     setSlide(0)
    // }
    // setLastScrollY(currentScrollY)

    
    // }

    const handleChangeFetch = e => {
        if (!movieInput){
            setdropdownMenu('')
            return
        }
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        let id = setTimeout(e => {
            fetchMovieSearchList(movieInput)
        }, 1000)
        setTimeoutId(id)
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
          /**
           * Do action if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              setdropdownMenu('');
            }
          }
      
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }

    function OutsideAlerter(props) {
        const wrapperRef = useRef(null);
        useOutsideAlerter(wrapperRef);
      
        return <div ref={wrapperRef}>
                     <input
                        value={movieInput}
                        onChange={ev => {
                            setMovieSearchListIsFetching(true)
                            setMovieInput(ev.target.value)
                            setdropdownMenu(' show')
                        }}
                        onKeyUp={handleChangeFetch}
                        className="form-control mr-sm-2" type="search" placeholder="Search Movie..." aria-label="Search" />
                        
                            <div className="dropdown">
                                <div className={"dropdown-menu" + dropdownMenu}>
                                    <MovieSearchCard/>
                                </div>
                            </div>
                        
                </div>;
      }
    


    return (
        <nav style={{
            // transform: `translate(0, ${slide}px)`,
            // transition: 'transform 200ms linear',
          }} className="navbar navbar-expand-lg navbar-dark bg-dark">

            <Link className="navbar-brand" to='/'><img className="home-img" alt='cinemaicon'
                src={require('../cinema.png')} /><span className='home-text'>Home</span></Link>
          

                <form onSubmit={e => {
                    e.preventDefault()
                    fetchMovieSearchListPage(movieInput)
                    props.history.push(`/${movieInput}`)
                    setMovieInput('')
                    setdropdownMenu('')
                    

                }} className="form-inline my-2 my-lg-0">

                  
                    {OutsideAlerter()}
                    <button className="btn btn-success my-2 my-sm-0" type="submit">GO!</button>
                     
                </form>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link about" href="/">About</a>
                    </li>
                </ul>
          

        </nav>
    );
}

export default withRouter(NavBar);
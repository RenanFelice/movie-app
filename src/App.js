import React from 'react';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';
import SearchPage from './components/SearchPage'
import MovieContextProvider from './context/MoviesContext'
import MovieDetails from './components/MovieDetails'
import {Switch, Route} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <NavBar />
        <div className='Main'>
          <Switch>
            <Route exact path='/' render={ routerProps => <Home {...routerProps}/>}/>
            <Route exact path='/:searchpage' component={SearchPage}/>
            <Route exact path='/moviedetails/:moviename' render={e => <MovieDetails key={uuidv4()}/>}/>
          </Switch>
        </div>
      </MovieContextProvider>
    </div>
  );
}

export default App;

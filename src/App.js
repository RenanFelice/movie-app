import React from 'react';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';
import MovieContextProvider from './context/MoviesContext'
import {Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <NavBar />
        <div className='Main'>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </div>
      </MovieContextProvider>
    </div>
  );
}

export default App;

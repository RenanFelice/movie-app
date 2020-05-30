import React from 'react';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar';
import MovieContextProvider from './context/MoviesContext'


function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <NavBar />
        <div className='Main'>
          <Home />
        </div>
      </MovieContextProvider>
    </div>
  );
}

export default App;

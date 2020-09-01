import React from 'react';
import './App.css';
import './assets/css/styles.css';
import './assets/bootstrap/css/bootstrap.min.css';

import Search from './components/SearchBar';
import Random from './components/RandomFact';
import Pokemon from './components/LoadPokemon';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Search/>
      <Random/>
      <Pokemon/>
      <Footer/>

    </div>
  );
}

export default App;

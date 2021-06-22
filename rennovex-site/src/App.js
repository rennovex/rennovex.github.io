import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Whatarewe from './components/WhatAreWe';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Hero/>
    <Whatarewe/>
    </div>
  );
}

export default App;

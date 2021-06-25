import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Whatarewe from './components/WhatAreWe';
import Whatwedo from './components/WhatWeDo';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Hero/>
    <Whatarewe/>
    <Whatwedo/>
    </div>
  );
}

export default App;

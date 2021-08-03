import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Whatarewe from './components/WhatAreWe';
import Whatwedo from './components/WhatWeDo';
import Whatwedid from './components/WhatWeDid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Whatarewe/>
      <Whatwedo/>
      <Whatwedid/>
      <Footer/>
    </div>
  );
}

export default App;

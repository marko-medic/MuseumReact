import React from 'react';
import './App.css';
import Header from './components/Header';
//import Footer from './components/Footer';
import Spinner from './components/Spiner';

function App() {
  return (
  <React.Fragment>
    <Spinner />
    <Header />
  </React.Fragment>
);
}

export default App;

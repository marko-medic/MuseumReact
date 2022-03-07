import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

function App() {
  return (
  <React.Fragment>
    <Header />
    <div className="set-overflow-y">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
      </BrowserRouter>
    </div>
    <Footer />
  </React.Fragment>
);
}

export default App;

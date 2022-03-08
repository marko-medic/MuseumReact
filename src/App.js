import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  ProtectedRoutes,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AllMuseums from './components/museum/MuseumActions/AllMuseums';

function App() {
  return (
  <React.Fragment>
    <Header />
    <div className="set-overflow-y">
      <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/museums" element={<AllMuseums />} />
      </Routes>
    </div>
    <Footer />
  </React.Fragment>
);
}

export default App;

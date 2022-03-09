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
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AllMuseums from './components/museum/MuseumActions/AllMuseums';
import AllAuditoriums from './components/museum/AuditoriumActions/AllAuditoriums';
import AllExhibitions from './components/museum/Exhibitions/AllExhibitions';
import AllExhibits from './components/museum/ExhibitActions/AllExhibits';
import AddMuseum from './components/museum/MuseumActions/AddMuseum';

function App() {
  return (
  <React.Fragment>
    <Header />
    <div className="set-overflow-y">
      <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/museums" element={<AllMuseums />} />
      <Route exact path="/auditoriums" element={<AllAuditoriums />} />
      <Route exact path="/exhibitions" element={<AllExhibitions />} />
      <Route exact path="/exhibits" element={<AllExhibits />} />
      <Route exact path="/addmuseum" element={<AddMuseum />} />
      </Routes>
      <NotificationContainer/>
    </div>
    <Footer />
  </React.Fragment>
);
}

export default App;

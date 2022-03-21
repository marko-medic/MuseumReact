import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AllMuseums from "./components/museum/MuseumActions/AllMuseums";
import AllAuditoriums from "./components/museum/AuditoriumActions/AllAuditoriums";
import AllExhibitions from "./components/museum/Exhibitions/AllExhibitions";
import AllExhibits from "./components/museum/ExhibitActions/AllExhibits";
import AddMuseum from "./components/museum/MuseumActions/AddMuseum";
import EditMuseum from "./components/museum/MuseumActions/EditMuseum";
import AddExhibit from "./components/museum/ExhibitActions/AddExhibit";
import EditExhibit from "./components/museum/ExhibitActions/EditExhibit";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="set-overflow-y">
        <Switch>
          <Redirect exact from="/" to="home" />
          <Route path="/home" component={HomePage} />
          <Redirect exact from="/" to="museums" />
          <Route exact path="/museums" component={AllMuseums} />
          <Redirect exact from="/" to="auditoriums" />
          <Route exact path="/auditoriums" component={AllAuditoriums} />
          <Redirect exact from="/" to="exhibitions" />
          <Route exact path="/exhibitions" component={AllExhibitions} />
          <Redirect exact from="/" to="exhibits" />
          <Route exact path="/exhibits" component={AllExhibits} />
          <Redirect exact from="/" to="addmuseum" />
          <Route exact path="/addmuseum" component={AddMuseum} />
          <Redirect exact from="/" to="editmuseum" />
          <Route exact path="/editmuseum/:id" component={EditMuseum} />
          <Redirect exact from="/" to="addexhibit" />
          <Route exact path="/addexhibit" component={AddExhibit} />
          <Redirect exact from="/" to="editexhibit" />
          <Route exact path="/editexhibit/:id" component={EditExhibit} />
        </Switch>
        <NotificationContainer />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;

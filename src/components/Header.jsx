import React, { Component } from 'react';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';

import '../App.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };}


    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Muzeji Srbije</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Muzeji" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/museums">Prikazi muzeje</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Dodaj muzej</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Izmeni muzej</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Obrisi muzej</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Izlozbene sale" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/auditoriums">Prikazi sale</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Dodaj salu</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Izmeni salu</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Obrisi salu</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Izlozbe" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/exhibitions">Prikazi izlozbe</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Dodaj izlozbu</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Obrisi izlozbu</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Eksponati" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/exhibits">Prikazi eksponate</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Dodaj eksponat</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Izmeni eksponat</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Obrisi eksponat</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
          )
      }
}

export default Header;
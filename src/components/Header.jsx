import React, { Component } from 'react';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';

import '../App.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };}


    render() {
      const user = JSON.parse(localStorage.getItem('user'));
      const privileges = {
        isAdmin: user.role === 'admin',
        isUser: user.role === 'user',
        isEditor: user.role === 'editor'
      }
      /*
      
      npr:
      <Navbar disabled={privileges.isUser} />
      <NavDropdown disabled={privileges.isEditor...} />
      itd...
      
      */

      
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
             
            <Navbar.Brand href="/home">Muzeji Srbije</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Muzeji" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/museums">Prikazi muzeje</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/addmuseum">Dodaj muzej</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Izlozbene sale" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/auditoriums">Prikazi sale</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Izlozbe" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/exhibitions">Prikazi izlozbe</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Eksponati" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/exhibits">Prikazi eksponate</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/addexhibit">Dodaj eksponat</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
          )
      }
}

export default Header;
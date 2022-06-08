import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function NavBar() {

  return (
    <Navbar className="backgroub-color" variant="dark" sticky="top" expand="md">
      <Container>
        <Navbar.Brand href='/'>
          <i className="fa-solid fa-person-walking-luggage"></i>
          <span className="font-style-title ml-2">เที่ยวไหนดี</span>
        </Navbar.Brand>
        <Navbar.Collapse className="d-flex justify-content-end">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
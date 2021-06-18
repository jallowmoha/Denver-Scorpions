import React from 'react'
import { Navbar, Nav, NavDropdown, FormGroup, Form, Button, FormControl } from 'react-bootstrap';


export const MainNavbar = ({brand, title1, title2,title3, dropdown, action1, action2, action3, contact, gallery}) => {
    return (
        <div className="main-navbar" >
           <Navbar className="main-navbar" collapseOnSelect expand="lg"  variant="dark">
  <Navbar.Brand href="#home">{brand}</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">{title1}</Nav.Link>
      <Nav.Link href="#pricing">{title2}</Nav.Link>
      <Nav.Link href="#pricing">{title3}</Nav.Link>
      <NavDropdown title={dropdown} id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">{action1}</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">{action2}</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">{action3}</NavDropdown.Item>
      
        
      </NavDropdown>
    </Nav>
    <Nav>
                        <Nav.Link href="#deets">{contact}</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        {gallery}
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

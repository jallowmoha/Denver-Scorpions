import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Home'
import { LeagueTable } from './LeagueTable'
import { TeamCard } from './Card'
import { Contact } from './Contact'
import { Gallery } from './Gallery'



export const MainNavbar = ({brand, title1, title2,title3, dropdown, action1, action2, action3, contact, gallery}) => {
  return (
      <Router>
      
    
        <div className="main-navbar" >
           <Navbar className="main-navbar" collapseOnSelect expand="lg"  variant="dark">
  <Navbar.Brand as={Link} to="/">DENVER SCORPIONS</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
      <Nav.Link as={Link} to="/fixtures">FIXTURES</Nav.Link>
      <Nav.Link as={Link} to="/table">TABLE</Nav.Link>
      <Nav.Link as={Link} to="/players">TEAM</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
      <Nav.Link as={Link} to="/gallery">
        GALLERY
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
       <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/table' exact component={LeagueTable} />
          <Route path='/players' exact component={TeamCard} />
          <Route path='/contact' exact component={Contact} />
           <Route path='/gallery' exact component={Gallery}/>
        </Switch>
        </Router>
    )
}

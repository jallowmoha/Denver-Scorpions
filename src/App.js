import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Navbar, Nav, } from 'react-bootstrap';


import Col from 'react-bootstrap/Col'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




import {Home} from './components/Home'
import { SocialMediaIcons } from './components/SocialMediaIcons'
import {Footer} from './components/Footer'
import { LeagueTable } from './components/LeagueTable'
import {TeamCard } from './components/Card'
import MainStadium from './images/mainstadium.jpg'
import { Contact } from './components/Contact'
import { Gallery } from './components/Gallery'



const useStyles = makeStyles((theme) => ({
  root: {
   
    backgroundImage: `url()`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: '#F4F4F4'
  },
  firstImage: {
    width: '100%',
    height: '600px',
  },

  schedule: {
    margin: '20px 40px'
  },

  break: {
    backgroundColor: '#272343',

  }
}))


function App() {
  const classes = useStyles();
  return (
   
    <Router>
       
    <div className={classes.root}>
      
    <CssBaseline/>
        <div className="main-navbar sticky-top pt-3 pb-3" >
           <Navbar className="main-navbar" collapseOnSelect expand="lg"  variant="dark" sticky="top">
  <Navbar.Brand className="brand-text" as={Link} to="/">DENVER SCORPIONS</Navbar.Brand>
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
     

      <Col xs={12} md={12}>
        
        <img className={classes.firstImage}
          src={MainStadium} alt=""
        />

        </Col>
   
   
        
      
     {/* <Break>
         <Fixtures/>
      
      </Break>  */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/table' exact component={LeagueTable} />
          <Route path='/players' exact component={TeamCard} />
          <Route path='/contact' exact component={Contact} />
           <Route path='/gallery' exact component={Gallery}/>
        </Switch>
    
     
      

      <Footer>
         <SocialMediaIcons/> 

      </Footer>
        
    </div>
       </Router>
      
    
  );
}

export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-elastic-carousel';


import { MainNavbar } from './components/Navbar'
import { MainCarousel } from './components/Carousel'
import Background from './images/gameday.JPG'
import { Api } from './components/Api';
import { PlayerCard, TeamCard } from './components/Card'
import { Header } from './components/Header'
import { SocialMediaIcons } from './components/SocialMediaIcons'
import { BrandBadge } from './components/Badge'
import { PageCalendar } from './components/Calendar'
import { Break, BreakPastGames, BreakTeam } from './components/Break'
import { Fixtures } from './components/Fixtures'
import {Footer} from './components/Footer'
import { Games } from './components/Games'
import { Schedule } from './components/Schedule'
import {LeagueTable} from './components/LeagueTable'
import MainStadium from './images/mainstadium.jpg'
import { PastGames } from './components/PastGames'
import {News} from './components/News'


const useStyles = makeStyles((theme) => ({
  root: {
   
    backgroundImage: `url()`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: '#fff'
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

  
}));

const breakPoints = [
  {
    width: 1, itemsToShow: 1
  },
  
  {
    width: 550, itemsToShow: 1, itemsToScroll: 2
  },
  
  {
    width: 768, itemsToShow: 3
  },
  
  {
    width: 1200, itemsToShow: 3
  },
]

const secondBreakPoints = [
  {
    width: 1, itemsToShow: 1
  },
  
  {
    width: 550, itemsToShow: 3, itemsToScroll: 3
  },
  
  {
    width: 768, itemsToShow: 5
  },
  
  {
    width: 1200, itemsToShow: 7
  },
]

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <CssBaseline/>
      
      <Row className='row'>
        
        
        <Col xs={12} md={12}>
         <MainNavbar
        brand="DENVER SCORPIONS"
        title1="ABOUT"
        title2="FIXTURES"
        title3="TABLE"
        dropdown="TEAM"
        action1="STAFF"
        action2="PLAYERS"
        action3="ACADEMY"
        contact="CONTACT"
        gallery="GALLERY"  
      />
         
        </Col>
        
        
     
        
      </Row>

      <Col xs={12} md={12}>
        
        <img className={classes.firstImage}
          src={MainStadium}
        />

      </Col>
      
     {/* <Break>
         <Fixtures/>
      
      </Break>  */}
      

      
        <Break>
        <Carousel breakPoints={breakPoints}>
        <Schedule />
          <Schedule />
          <Schedule />
          <Schedule />
          <Schedule />
          <Schedule />
        </Carousel>


        
          
         

        
        </Break>

     
      
    
      <BreakPastGames>
        <Row>
          <Col >
            <LeagueTable />
          </Col>
          
         
         
        
     
          


       
         
          

        </Row>
       
          
         
         
      

      </BreakPastGames>
     
      
      
      <BreakPastGames />

      <BreakTeam>
        <Carousel breakPoints={secondBreakPoints}>
           <TeamCard
        number="15"
        position="midfield"
      />
       <TeamCard
        number="15"
        position="midfield"
          />
           <TeamCard
        number="15"
        position="midfield"
          />
           <TeamCard
        number="15"
        position="midfield"
          />
           <TeamCard
        number="15"
        position="midfield"
          />
           <TeamCard
        number="15"
        position="midfield"
          />
           <TeamCard
        number="15"
        position="midfield"
          />
           <TeamCard
        number="15"
        position="midfield"
          />
           <TeamCard
        number="15"
        position="midfield"
      />
        </Carousel>


      </BreakTeam>

      <Break>
        <News />
         <News/>


      </Break>
     
      
     
     {/*<Col  >
            <PageCalendar  /> 

          </Col> */}


     

       

      <Col xs={6} md={2}>
     
          


        </Col>
      <Col xs={6} md={2}>
         
        </Col>
     
      <br />
      
      {/*  <Row>
        <Col md={{ span: 6, offset: 3}} >
          <MainCarousel/>
          
        </Col> 
        
        

      </Row> */}
     
      
      
     
      
      

      <Footer>
         <SocialMediaIcons/> 

      </Footer>
      
    </div>
  );
}

export default App;

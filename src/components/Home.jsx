import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-elastic-carousel';
import {useHistory} from 'react-router-dom'


import {TeamCard } from './Card'
import { Break, BreakPastGames, BreakTeam } from './Break'
import { Schedule } from './Schedule'
import {LeagueTable} from './LeagueTable'
import { News } from './News'
import { Gallery } from './Gallery'

const breakPoints = [
  {
    width: 1, itemsToShow: 1
  },
  
  {
    width: 550, itemsToShow: 1, itemsToScroll: 2
  },
  
  {
    width: 768, itemsToShow: 2
  },
   
  {
    width: 1200, itemsToShow: 3
  },
  
   {
    width: 1600, itemsToShow: 4
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


  

export const Home = () => {
  let history = useHistory()
  const tablePage = () => {
    history.push('/table')
  }
   
    return (
        
            <div >
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
          <Col >
            <LeagueTable />
                </Col>
                <div className='button-container'>
                 <button onClick={tablePage} className='table-button'> View Full Table </button>

            </div>
             
     </BreakPastGames>
      
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

      
        
      
      
     
     {/*<Col  >
            <PageCalendar  /> 

          </Col> */}


     

        <Break>
          <p className="latest-news"> LATEST NEWS</p>
          
          <Row>
            <Col xs={12} sm={12} md={12} lg={4}> <News /> </Col>
            <Col xs={12} sm={12} md={12} lg={4}> <News /> </Col>
            <Col xs={12} sm={12} md={12} lg={4}> <News/> </Col>  


          </Row>  
        
        </Break>

      
      <Col xs={6} md={2}>
         
        </Col>
     
      <br />
      
      {/*  <Row>
        <Col md={{ span: 6, offset: 3}} >
          <MainCarousel/>
          
        </Col> 
        
        

      </Row> */}
        <Break>
           <p className="latest-news"> TEAM PHOTOS</p>
          <Row>
            <Col xs={4} sm={4} md={3} lg={2}> <Gallery /> </Col>
            <Col xs={4} sm={4} md={3} lg={2}> <Gallery /> </Col>
            <Col xs={4} sm={4} md={3} lg={2}> <Gallery /> </Col>
            <Col xs={4} sm={4} md={3} lg={2}> <Gallery /> </Col>
            <Col xs={4} sm={4} md={3} lg={2}> <Gallery /> </Col>
            <Col xs={4} sm={4} md={3} lg={2}> <Gallery /> </Col>
            <Col xs={4} sm={4} md={3} lg={2}> <Gallery/> </Col>
          </Row>
     </Break>
     
      
     
            
        </div>
    )
}

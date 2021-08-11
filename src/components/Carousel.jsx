import React from 'react';
import { Carousel } from 'react-bootstrap';
import PreGame from '../images/pregame.JPG'
import GameDay from '../images/gameday.JPG';
import Squad from '../images/squad.jpg'
export const MainCarousel = ({firstLabel, firstTitle, secondLabel, secondTitle, thirdLabel, thirdTitle}) => {
    return (
        <div className="main-container">
        <div className= "container-carousel">
            <Carousel fade >
  <Carousel.Item interval={1000}>
    <img
      className=" image-carousel"
      src={PreGame}
      alt="First slide"
      
    />
    <Carousel.Caption>
    <h3>{firstLabel }</h3>
      <p>{firstTitle}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="image-carousel"
      src={GameDay}
      alt="Second slide"
    />
    <Carousel.Caption>
    <h3>{secondLabel }</h3>
      <p>{secondTitle}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="image-carousel"
      src={Squad}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h3>{thirdLabel }</h3>
      <p>{thirdTitle}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
         
            </div>
             </div>
    )
}

import React from 'react'
import Shybu from '../images/syhbu.JPG'

export const News = ({src}) => {
    return (
        <div className="row news-card">
            
              

               
                <img src={Shybu} alt="player" className="news-img" />
                
            <div className="news-container">
                <p className="news-date"> July 14th 2020 </p>
                <button className="news-headline">DENVER SCORPIONS BECOME CHAMPIONS</button>
                </div>
               
                     

            </div>
            
            
       
    )
}

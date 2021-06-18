import React from 'react'
import {useQuery} from 'react-query'



import * as api from './Api'







export const Games = ({ }) => {
   
    const {data} = useQuery('game', api.getScheduleGames)
    const{data1} = useQuery('pastgames', api.getPastGames)
    

    return (

      <div className="row games-container ">
            
     
       
            <div className="col">
            <p className="schedule-text"> Schedule </p>
                 {data?.map((game, index) => {
                return (
                    <>
                    <div className='column' key={index}>
                 
                
                 <div className="games row">
                 <p className="game-text"><img className='logo-img' src={game.home_logo}/> {game.home_team} </p>
                <p className="game-text"> VS </p>
                <p className="game-text"> <img className='logo-img' src={game.away_logo}/> {game.away_team} </p>
                </div>
                
                

            </div>

           
                    </>
                )
            })}

            </div>
        </div>
      
    )
}
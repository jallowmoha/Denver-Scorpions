import React from 'react'
import  Scorpion  from '../images/teamlogo/scorpions.png'
import { Chin } from '../images/teamlogo/chin.png'
import Wow from '../images/teamlogo/wow.png'

export const Schedule = () => {
    return (

        

        <div className='schedule'>
           
           
            <div className='row '>
                <div>
                    <TeamLogo
                        team={Scorpion}
                        teamName="Scorpions"
                   />

                </div>
                 <div >
                    <p className=' location'>Lowry Park</p>
                    <p className='date-schedule'> June 24th @6pm</p>
                    <p className='vs-text'> VS </p>

                </div>
               
                
                <div className='team-style'>

                  <TeamLogo
                        team={Wow}
                        teamName="Wow FC"
                       
                />
                    
                </div>
               

               
            </div>
            
        </div>
    )
}

export const TeamLogo = ({team, teamName}) => {
    return (
        <div className='team-logo'>
            <ul >
                <li>
                     <img className='logo-img' src={team} />
                    
                    

                </li>
                <li>
                    <p className='team-name'>{ teamName }</p>
                </li>
                
            </ul>
           

        </div>
    )
}

export const GameTime = () => {
    return (
        <div className='game-time'>
            <p className="schedule-text"> Lowry Park @ June 25th, 5pm </p>
            <p className="schedule-text"> vs </p>
        </div>
    )
}
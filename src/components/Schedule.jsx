import React from 'react'
import  Scorpion  from '../images/teamlogo/scorpions.png'
import Wow from '../images/teamlogo/wow.png'

export const Schedule = () => {
    return (

        

        <div className='schedule ms-0 ps-0'>
           
           
            <div className='row ms-0'>
                <div className="home-team ">
                    <TeamLogo
                        team={Scorpion}
                        teamName="Scorpions"
                   />

                </div>
                 <div className="" >
                    <p className=' location'>Lowry Park</p>
                    <p className='date-schedule'>June 24th @6pm </p>
                    <p className='vs-text'> VS </p>

                </div>
               
                
                <div className='away-team'>

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
                     <img className='logo-img' src={team} alt={teamName} />
                    
                    

                </li>
                <li>
                    <p className='team-name'>{ teamName }</p>
                </li>
                
            </ul>
           

        </div>
    )
}


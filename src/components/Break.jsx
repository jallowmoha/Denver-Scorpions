import React from 'react'

export const Break = ({children}) => {
    return (
      
            <div className='break' >
        {children}
            
        </div>

        
    )
}

export const BreakPastGames = ({children}) => {
    return (
      
        <div className='break-pastgames' >
            
            
            <div >
              {children}
            </div>

           
      
            
        </div>

        
    )
}
export const BreakTeam = ({children}) => {
    return (
      
        <div className='break-team' >
           <p className='first-team'> THE FIRST TEAM </p>
            <div>
                  {children}

            </div>
      
            
        </div>

        
    )
}
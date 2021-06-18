import React, { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

import * as api from './Api'
import Scorpions from '../images/teamlogo/scorpions.png'
import Wow from '../images/teamlogo/wow.png'




export const Fixtures = ({ }) => {
    
    
    
    return (
        <div className='row fixtures'>
           
           
                        <p className='fixtures-text' > <img className='logo-img' src={Scorpions}/> Denver Scorpions </p>
            <p className='fixtures-text' >  VS </p>
                        <p className='fixtures-text'> <img className='logo-img' src={Wow}/> Wow FC </p>
                    
                 
               
           
             

          
            
            
        </div>
    )
}



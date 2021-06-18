import React from 'react'
import { useQuery } from 'react-query'

import * as api from './Api'

export const LeagueTable = () => {
    const {data} = useQuery('table', api.getTable)
    return (
        <div className="league-table">
            <table>
                <tr>
                    <th> Position</th>
                    <th> Team</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Pts</th>
                </tr>
                {data?.map((table, index) => {
                    return (
                        <>
                            <tr key={index}>
                    <td>1</td>
                  <td>{table.team_name }</td>
                     <td> {table.match_played} </td>
                    <td> {table.matches_won}</td>
                     <td> {table.matches_drew}</td>
                    <td> {table.matches_lost} </td>
                    <td> {table.points} </td>
                    
                            </tr>
                        </>
                    )
                        
                })}
               
                   
                   
               
           </table> 
        </div>
    )
}

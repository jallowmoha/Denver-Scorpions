import React from 'react'
import { Card } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Moh from '../images/Players/Moh.png'

export const PlayerCard = ({ players }) => {
    


    return (
        <div className="row player-card">
            {players.map((player,index) => ( 
                <Card key={index} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={player.photo} className= 'card-photo'/>
  <Card.Body  style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
     <Card.Title>{ player.name }</Card.Title>
    <Card.Text>
      {player.position}
    </Card.Text>
  </Card.Body>
</Card> 
            ))}
        </div> 
    )
}

const useStyles = makeStyles((theme) => ({
  teamCard: {
    width: '200px',
    height: '350px',
   
    marginLeft: "15px",
    marginTop: "60px",
    border: "solid 1px none none none",
   
    textAlign: 'center'

  },

  teamImage: {
    width: '200px',
    height: '200px',
   
  },

  textCard: {
    color: '#fff',
    fontWeight:'bold'
  },

  textBox: {
    border: 'solid 1px',
    paddingTop: '10px',
    backgroundColor: '',
   
    
  }
  
}))

export const TeamCard = ({ number, position }) => {
  const classes = useStyles();
  return (
    <div className={classes.teamCard}>
      <img className={classes.teamImage} src={Moh} alt="player" />
      <div className={classes.textBox}>
        <p className={classes.textCard}> Number: {number}</p>
      <p className={classes.textCard}> Position: {position}</p> 

      </div>
      


    </div>
  )
}

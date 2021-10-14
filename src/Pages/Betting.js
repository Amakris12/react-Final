import {React, useEffect, useState} from 'react'
import axios from "axios";
import '../styles/index.css';


const Betting = () => {
    const [bet, setBet] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/games/seasonYear/2021',
        headers: {
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
            'x-rapidapi-key': 'd8f0fbc078mshb6bdec4985ef8b7p17e369jsn6e42463f2fec'
        }
        };
    useEffect(()=>{
        axios.request(options).then(function (response) {
           const entires = (response.data)
           console.log(entires.api.games)
           setBet(entires.api.games)
        }).catch(function (error) {
            console.error(error);
        });
    },[])
    return (
        <>
         <div className='nbaGames'>
            {bet.map((Betting)=>{
                const {league,seasonYear,hTeam,vTeam,fullName,score,points,statusGame} = Betting;
                return(
                    <div className='Games'>
                        <h1 className='league'>{league}</h1>
                        <h4 className='season'>{seasonYear}</h4>
                        <div className='squads'>
                            <h2 className='teamNames'>{hTeam.fullName}</h2>
                            <h2 className='teamNames'>{vTeam.fullName}</h2>
                        </div>
                        <div className='squadsTwo'>
                            <p className='teamScores'>{hTeam.score.points}</p>
                            <p className='teamScores2'>{vTeam.score.points}</p> 
                        </div>
                        <p className='status'>{statusGame}</p>
                    </div>
                )
            })}
        </div> 
        </>
    )
}

export default Betting

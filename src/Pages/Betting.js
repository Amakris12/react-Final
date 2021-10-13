import {React, useEffect, useState} from 'react'
import axios from "axios";
import '../styles/index.css';


const Betting = () => {
    const [bet, setBet] = useState([]);
    useEffect(()=>{
        const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/games/seasonYear/2021',
        headers: {
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
            'x-rapidapi-key': 'd8f0fbc078mshb6bdec4985ef8b7p17e369jsn6e42463f2fec'
        }
        };
        axios.request(options).then(function (response) {
            const entries = Object.entries(response.data)
            // const entries = response.json();
            console.log(entries)
            setBet(entries)
        }).catch(function (error) {
            console.error(error);
        });
    },[])
    const local = bet[0]
    console.log(local[1].games)
    return (
        <>
         <div>
            {/* {local[1].games.map((Betting)=>{
                const {seasonYear, league, gameId, teamId,live} = Betting;
                return(
                    <div>
                        <h1>{league}</h1>
                        <h3>{seasonYear}</h3>
                        <p className='teams'>{gameId}</p>
                        <p>{teamId}</p>
                        <p>{live}</p>
                    </div>
                )
            })} */}
        </div> 
        </>
    )
}

export default Betting

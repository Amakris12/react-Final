import {React,useEffect,useState} from 'react'
import axios from "axios";
import '../styles/index.css';

const Football = () => {
    const [teams, setTeams] = useState([]);
    const options = {
            method: 'GET',
            url: 'https://nba-player-individual-stats.p.rapidapi.com/teams',
            headers: {
                'x-rapidapi-host': 'nba-player-individual-stats.p.rapidapi.com',
                'x-rapidapi-key': 'd8f0fbc078mshb6bdec4985ef8b7p17e369jsn6e42463f2fec'
            }
            };
    useEffect(()=>{
            axios.request(options).then(function (response) {
                setTeams(response.data)
                // console.log(response.data)
            }).catch(function (error) {
                console.error(error);
            });
    })
    return (
        <div className='NBAteam'>
            {teams.map((team)=>{
                const {id,name, conference,record,teamLogoUrl}= team;
                return (
                    <div>
                        <div className='teams' key={id}>
                            <img className='teamLogo' src={teamLogoUrl} alt='' />
                            <h1 className='teamName'>{name}</h1>
                            <p className='teamConference'>{conference}</p>
                            <p className='teamRecord'>{record}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Football

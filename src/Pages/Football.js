import {React,useEffect,useState} from 'react'
import axios from "axios";
import '../styles/index.css';
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Football = () => {
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
        params: {id: '33'},
        headers: {
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            'x-rapidapi-key': 'd8f0fbc078mshb6bdec4985ef8b7p17e369jsn6e42463f2fec'
        }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            const entries = Object.entries(response.data)
            console.log(entries)
            setTeams(entries)
        }).catch(function (error) {
            console.error(error);
        });
    })
    return (
        <div>
            <Navbar />
            <Banner />
            {teams.map((team)=>{
                const {id,name,league,season,country}= team;
                return (
                    <div key={id}>
                        <h2>{league}</h2>
                        <h3>{name}</h3>
                        <p>{season}</p>
                        <p>{country}</p>
                    </div>
                )
            })}
            <Footer />
        </div>
    )
}

export default Football

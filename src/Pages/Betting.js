import {React, useEffect, useState} from 'react'
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

const Betting = () => {
    const [bet, setBet] = useState([]);
    useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://odds.p.rapidapi.com/v1/odds',
            params: {
                sport: 'soccer_epl',
                region: 'uk',
                mkt: 'h2h',
                dateFormat: 'iso',
                oddsFormat: 'decimal'
            },
            headers: {
                'x-rapidapi-host': 'odds.p.rapidapi.com',
                'x-rapidapi-key': 'd8f0fbc078mshb6bdec4985ef8b7p17e369jsn6e42463f2fec'
            }
            };
        axios.request(options).then(function (response) {
            const entries = Object.entries(response.data)
            setBet(entries)
        }).catch(function (error) {
            console.error(error);
        })
    },[])
    return (
        <>
        <div>
            <Navbar />
            <Banner />
            {bet.map((Betting)=>{
                const {id,home_team,sports_nice,teams,sites,commence_time,site_key,site_nice,odds, h2h} = Betting;
                return(
                    <div key={id}>
                        <h1>{commence_time}</h1>
                        <h3>{sports_nice}</h3>
                        <p className='teams'>{teams}</p>
                        <ul>
                            <li>{site_key}</li>
                            <li>{site_nice}</li>
                            <li>{odds}</li>
                            <ul>
                                <li>{h2h}</li>
                            </ul>
                        </ul>
                        <p>{home_team}</p>
                        <p>{sites}</p>
                    </div>
                )
            })}
            <Footer />
        </div>
        </>
    )
}

export default Betting

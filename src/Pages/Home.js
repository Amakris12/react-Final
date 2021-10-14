import React from 'react'
import Card from '../Components/Card'
import Links from '../Components/Links'
import BottomCard from '../Components/BottomCard'
const Home = () => {
    return (
        <div>
            <div className='cardHolder'>
                <Card Header='About the NFL' Content='The National Football League is a professional American football league consisting of 32 teams, divided equally between the National Football Conference and the American Football Conference.'/>
                <Card Header='About Us' Content='This website is just to show you the current, previous, and future games of either the NFL or NBA. We give live updates for whatever game you are looking for, wether that to checkup on your favorite team or check to see if the team you bet on is covering the spread. If any problems contact us at the email down below. '/>
                <Card Header='About the NBA' Content='The National Basketball Association is a professional basketball league in North America. The league is composed of 30 teams and is one of the four major professional sports leagues in the United States and Canada. It is the premier mens professional basketball league in the world.'/>
            </div>
            <Links/>
            <div className='cardHolder'>
                <BottomCard className='bottomCard' Header='What we provide about the NFL' Content='What we provide about the NFL is all the previous, live, and future games that are going on in the current season. If you have made any bets or want to keep updated on your favorite team. Check here for updates!  '/>
                <BottomCard className='bottomCard' Header='What we provide about the NBA' Content='What we provide about the NBA is all the previous, live, and future games that are going on in the current season. If you have made any bets or want to keep updated on your favorite team. Check here for updates!'/>
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import Card from '../Components/Card'
import Links from '../Components/Links'
import BottomCard from '../Components/BottomCard'
const Home = () => {
    return (
        <div>
            <div className='cardHolder'>
            <Card Header='About Us' Content='What we give you guys is all the useful tips you need to know about your nba bets and too see if your team is covering the spread. We show curent records and current scores of the NBA. We give live updates for whatever game you are looking for, wether that to checkup on your favorite team. If any problems contact us at the email down below. '/>
            <Card Header='About the NBA' Content='The National Basketball Association is a professional basketball league in North America. The league is composed of 30 teams and is one of the four major professional sports leagues in the United States and Canada. It is the premier mens professional basketball league in the world. '/>
            </div>
            <Links/>
            <div className='cardHolder'>
                <BottomCard className='bottomCard' Header='What we provide about the NBA' Content='What we provide about the NBA is the current games that are going on and every teams standing. We show previous, present and future games so you can gather all the information you need about whatever you wanna know about the NBA. We hope you enjoy the information we provide for you guys. Thank you for all the much need suport.'/>
            </div>
        </div>
    )
}

export default Home

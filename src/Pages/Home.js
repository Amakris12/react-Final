import React from 'react'
import Card from '../Components/Card'
import Video from '../Components/Video'
import BottomCard from '../Components/BottomCard'
const Home = () => {
    return (
        <div>
            <div className='cardHolder'>
                <Card Header='Pros of Betting' Content='Most people that make huge amounts of money from gambling use it to have fun and entertain themselves. Relaxation and comfort comes when you are having fun. Relaxation and comfort calms the brain and erases every form of worries from the mind. Gambling activities have so many economic benefits to the game players.'/>
                <Card Header='About Us' Content='We are just here to give you some helpful information on sports betting. We do not condone it or promote such but if you were to start sports betting. Look here and use the information we provided to you.'/>
                <Card Header='Cons of Betting' Content='Harm from gambling isn’t just about losing money. Gambling can affect self-esteem, relationships, physical and mental health, work performance and social life. It can harm not only the person who gambles but also family, friends, workplaces and communities'/>
            </div>
            <Video/>
            <div className='cardHolder'>
                <BottomCard className='bottomCard' Header='How to bet' Content='The basics and what you should be looking for on this website is Point Spreads, money Spread and totals. These are what you should be betting on. After doing research here look for places you can make bets and make money!'/>
                <BottomCard className='bottomCard' Header='What we Provide' Content='All we provide here is the information that can make you the most successful bettor you could possibly be. We provide you with betting odds which can help you further decide who you would like to place a bet on. We also tell you about the current status of nfl teams which will also help you decide who to bet on.'/>
            </div>
        </div>
    )
}

export default Home

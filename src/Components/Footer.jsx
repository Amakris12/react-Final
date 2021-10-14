import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='InfoHold'>
                <div>
                    <h3 className='footStuff'>Information</h3>
                    <ul>
                        <li className='travel'>Andrew Makris</li>
                        <li className='travel'>623-806-9966</li>
                        <li className='travel'>amakris03@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h3 className='footStuff'>Navigation</h3>
                    <ul>
                        <li className='travel'>Home</li>
                        <li className='travel'>Football</li>
                        <li className='travel'>Betting</li>
                    </ul>
                </div>
                <div>
                    <h3 className='footStuff'>Socials</h3>
                    <ul>
                        <a href="https://www.instagram.com/andrew.makris/"><li className='travel'>Instagram</li></a>
                        <a href="https://twitter.com/_amakris12?lang=en"><li className='travel'>Twitter</li></a>
                        <a href="https://www.tiktok.com/@andrewmakris1"><li className='travel'>Tiktok</li></a>
                    </ul>
                </div>
                <div className='shortP'>
                    <h3 className='footStuff'>About</h3>
                    <p className='About'>This website is just to show you the current, previous, and future games of either the NFL or NBA. We give live updates for whatever game you are looking for, wether that to checkup on your favorite team or check to see if the team you bet on is covering the spread.  </p>
                </div>
            </div>
        </div>
    )
}

export default Footer

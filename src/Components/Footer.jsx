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
                        <li className='travel'>Instagram</li>
                        <li className='travel'>SnapChat</li>
                        <li className='travel'>Tiktok</li>
                    </ul>
                </div>
                <div className='shortP'>
                    <h3 className='footStuff'>About</h3>
                    <p className='About'>We are just here to give you some helpful information on sports betting. We do not condone it or promote such but if you were to start sports betting</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

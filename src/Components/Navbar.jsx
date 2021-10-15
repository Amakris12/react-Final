import React from "react";
import Links from '../Util/Links'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div  className='navBar'>
        <h2 className='navHead'>NBA Games and Records </h2>
        
        <ul className='navList'>
            {Links
              .filter((link) => link.text !== "Error")
              .map((link) => {
                const { url, id, text } = link;
                return (
                  <li className='itemholder' key={id}>
                    <Link to={url}><p className='navItem'>{text}</p></Link>
                  </li>
                );
              })}
        </ul>
        
    </div>)
}

   
export default Navbar

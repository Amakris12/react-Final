import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Links from '../Util/Links'

const Navbar = () => {
    <div>
        <ul>
            {Links
                .filter((link)=> link.text !== "Home")
                .map((link)=>{
                    const {id, url, text} = link
                    console.log(link)
                    return (
                        <li key={id}>
                            <Link to={url}><h2 className='item'>{text}</h2></Link>
                        </li>
                    )
                })
            }
        </ul>
    </div>
}

   
export default Navbar

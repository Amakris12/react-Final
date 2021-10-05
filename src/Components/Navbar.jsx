import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Betting from "../Pages/Betting";
import Football from "../Pages/Football";
import Home from "../Pages/Home";

const Navbar = () => {
    function First() {
        return <Home/>;
    }

    function Second() {
        return <Betting/>;
    }

    function Third() {
        return <Football/>;
    }
    return (
    <Router>
      <div className='navBar'>
            <h3 className='navHead'>NFL Teams and Betting Odds</h3>
            <ul className='navList'>
                <li className='navItem'>
                    <Link className='item' to='/Home'>Home</Link>
                </li>
                <li className='navItem'>
                    <Link className='item' to='/Betting'>Betting</Link>
                </li>
                <li className='navItem'>
                    <Link className='item' to='/Football'>Football</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/Home">
                    <First />
                </Route>
                <Route path="/Betting">
                    <Second />
                </Route>
                <Route path="/Football">
                    <Third />
                </Route>
            </Switch>
        </div>
    </Router>
    
  );
}

export default Navbar

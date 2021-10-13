import {React} from 'react'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import {
  Switch,
  Route,
} from "react-router-dom";
import Links from './Util/Links'


const App = () => {
    return ( 
        <div>
            <Navbar/>
            <Banner/>
            <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            {/* <Route path="/betting">
            <Betting />
            </Route>
            <Route path="/football">
            <Football />
            </Route> */}
            {Links
            .filter((link) => link.text !== "Home")
            .map((link) => {
                const { id, url, page } = link;
                return (
                <Route key={id} path={url}>
                    {page}
                </Route>
                );
            })}
            {/* <Route exact path="*">
            <Error />
            </Route>  */}
        </Switch>
            <Footer/>
        </div>
    )
}

export default App

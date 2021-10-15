import Betting from "../Pages/Betting";
import Football from "../Pages/Football";
import Home from "../Pages/Home";
import Error from '../Components/Error'
export const Links = [
    {
        id:1,
        url:"/",
        text:"Home",
        page:<Home/>,
    },
    {
        id:2,
        url:"/Games",
        text:"Games",
        page:<Betting/>,
    },
    {
        id:3,
        url:"/Records",
        text:"Records",
        page:<Football/>,
    },
    {
         id: 4,
        url: "*",
        text: "Error",
        page: <Error />,
    },
]
export default Links
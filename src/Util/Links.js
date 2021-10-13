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
        url:"/Basketball",
        text:"Basketball",
        page:<Betting/>,
    },
    {
        id:3,
        url:"/Football",
        text:"Football",
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
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Landing from "./Landing";
import Mental from "./Mental";
import Physical from "./Physical";
import Disparity from "./Disparity";


export const router = createBrowserRouter(
    [
        {
            path: '/',
            element:<App />,
            children:[
                {
                index:true,
                element: <Landing />
                },
                {
                    path:'/mental-health-strategy',
                    element: <Mental />
                },
                {
                    path:'/physical-wellness',
                    element: <Physical />
                },
                {
                    path:'/healthcare-disparity',
                    element: <Disparity />
                }
            ]
        }
    ]
)
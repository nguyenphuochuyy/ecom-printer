import Home from "../pages/Home";
import Layouts from "../pages/Layout";
import Login from "../pages/Login";

export const Routes = [
    {
        path : "/",
        element : <Layouts/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/login",
                element : <Login/>
            }
        ]
    }
]
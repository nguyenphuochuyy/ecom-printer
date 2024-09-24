import Home from "../pages/Home";

export const Routes = [
    {
        path : "/",
        element : <Home/>,
        children : [
            {
                path : "/",
                element : <Home/>
            }
        ]
    }
]
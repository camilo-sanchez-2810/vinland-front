import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import Layout from "../layout/Layout";
import SignIn from './login/SignIn.jsx';
import SignUp from './login/SignUp.jsx';

export const indexRouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
            path:"/",
            element: <Home/>
            }
    ]
    },
    {
        path :"/signin",
        element: <SignIn />
    },
    {
        path :"/signup",
        element: <SignUp />
    },
])
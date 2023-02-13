import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import Layout from "../layout/Layout";
import Shopping from "../views/Shopping/Shopping";
import SignIn from '../views/login/SignIn.jsx';
import SignUp from '../views/login/SignUp.jsx';
import AdminPanel from "../views/AdminPanel/AdminPanel";

export const indexRouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
            path:"/",
            element: <Home/>
            },
            {
            path:"/shopping",
            element: <Shopping/>
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
    {
        path :"/admin",
        element: <AdminPanel />
    },
])
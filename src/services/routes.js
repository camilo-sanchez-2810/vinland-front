import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import Layout from "../layout/Layout";
import Shopping from "../views/Shopping/Shopping";
import SignIn from '../views/login/SignIn.jsx';
import SignUp from '../views/login/SignUp.jsx';
import Profile from "../views/Profile/Profile.jsx";
import Product from "../views/Product_detail/Product";
import AdminPanel from "../views/AdminPanel/AdminPanel";
import Edit from "../views/Edit_profile/Edit";
import Verify from "../views/Verify/Verify";

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
            },
            {
            path :"/product/:id",
            element: <Product/>
            },
            {
            path:"/profile",
            element: <Profile/>
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
    {
        path:"/edit-profile",
        element: <Edit/>
    },
    {
        path:"/verify/:id",
        element:<Verify/>
    }

])
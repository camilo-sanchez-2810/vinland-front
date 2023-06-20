import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import Layout from "../layout/Layout";
import Shopping from "../views/Shopping/Shopping";
import { Signup } from "../views/signups/Signup.jsx";
import SignIn from '../views/login/SignIn'
import Profile from "../views/Profile/Profile.jsx";
import Product from "../views/Product_detail/Product";
import AdminPanel from "../views/AdminPanel/AdminPanel";
import Payment from "../views/Payment/Payment";
import Edit from "../views/Edit_profile/Edit";
import Verify from "../views/Verify/Verify";
import AdminPanelP from "../views/AdminPanel/adminPanel.Products";
import AdminPanelC from "../views/AdminPanel/AdminPanel.Compras";
import Create from "../views/CreateProduct/Create";

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
            },
            {
                path: '/payment/:purchase_id',
                element: <Payment />
            } 
    ]
    },
    {
        path :"/signin",
        element: <SignIn />
    },
    {
        path :"/signup",
        element: <Signup />
    },
    {
        path :"/admin",
        element: <AdminPanel />,
    },
    {
        path:"/edit-profile",
        element: <Edit/>
    },
    {
        path:"/verify/:id",
        element:<Verify/>
    },
    {
        path:"/admin-productos",
        element: <AdminPanelP/>
    },
    {
        path:"/admin-compras",
        element: <AdminPanelC/>
    },
    {
        path:"/create-product",
        element: <Create/>
    }
])
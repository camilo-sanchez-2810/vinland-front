import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import Layout from "../layout/Layout";
import Shopping from "../views/Shopping/Shopping";

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
    }
])
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "menu",
                element: <Menu></Menu>
            },
            {
                path: "order/:category",
                element: <Order></Order>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            },
        ]
    },
])
export default Router;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Page404 from "../pages/Shared/Page404/Page404";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Me from "../pages/Me/Me";
import RequireAuth from "./RequireAuth";
import Users from "../pages/Users/Users";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Page404 />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/me",
                element: <RequireAuth> <Me></Me></RequireAuth>
            },
            {
                path: '/users',
                element: <RequireAuth> <Users></Users></RequireAuth>
            }
        ]
    }

])

export default router;
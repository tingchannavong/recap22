import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Posts from "../pages/Posts";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import TokenProfile from "../pages/TokenProfile";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/post',
                element: <Posts />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/token-profile',
                element: <TokenProfile />
            },
        ],
    },
])

export default routes;
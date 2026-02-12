import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import ErrorPage from "../pages/ErrorPage";

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
                element: <Login />
            },
            {
                path: '/post',
                element: <Posts />
            },
        ],
    },
])

export default routes;
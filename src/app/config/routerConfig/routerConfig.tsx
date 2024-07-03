import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
    AboutPage,
    LoginPage,
    RegisterPage,
    PostsPage,
    Layout,
    ErrorPage,
    MainPage,
} from "pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <MainPage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/login", element: <LoginPage /> },
            { path: "/register", element: <RegisterPage /> },
            { path: "/posts", element: <PostsPage /> },
        ],
    },
]);

export const ReactRouter = () => {
    return <RouterProvider router={router} />;
};

import { createBrowserRouter } from "react-router-dom";
import { Layout } from "pages";
import { routesPaths } from "../constants/routesPaths";
import { publicRoutes } from "./publicRoutes";
import { authenticationRoutes } from "./authenticationRoutes";

export const router = createBrowserRouter([
    {
        path: routesPaths.root,
        element: <Layout />,
        children: publicRoutes,
    },
    ...authenticationRoutes,
]);

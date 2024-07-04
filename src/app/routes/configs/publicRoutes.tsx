import { AboutPage, PostsPage, MainPage, ErrorPage } from "pages";
import { routesPaths } from "../constants/routesPaths";
import { ConditionalRoute } from "../components/ConditionalRoute";

export const publicRoutes = [
    {
        path: routesPaths.root,
        element: <ConditionalRoute conditition path={routesPaths.login} />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: routesPaths.about,
                element: <AboutPage />,
            },
            {
                path: routesPaths.posts,
                element: <PostsPage />,
            },
        ],
    },
];

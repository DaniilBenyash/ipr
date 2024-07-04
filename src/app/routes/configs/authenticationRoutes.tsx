import { RegisterPage, LoginPage, ErrorPage } from "pages";
import { routesPaths } from "../constants/routesPaths";
import { ConditionalRoute } from "../components/ConditionalRoute";

export const authenticationRoutes = [
    {
        path: routesPaths.login,
        element: (
            <ConditionalRoute conditition={false} path={routesPaths.root} />
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
            {
                path: routesPaths.register,
                element: <RegisterPage />,
            },
        ],
    },
];

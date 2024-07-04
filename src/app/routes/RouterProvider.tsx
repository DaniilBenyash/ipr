import { RouterProvider as RouterProviderRRD } from "react-router-dom";
import { router } from "./configs";

export const RouterProvider = () => {
    return <RouterProviderRRD router={router} />;
};

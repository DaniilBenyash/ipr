// src/shared/routes/ProtectedRoute.js
import { FC } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

interface ConditionalRoute {
    conditition: boolean;
    path: string;
}

export const ConditionalRoute: FC<ConditionalRoute> = ({
    conditition,
    path,
}) => {
    return <>{!conditition ? <Navigate to={path} replace /> : <Outlet />}</>;
};

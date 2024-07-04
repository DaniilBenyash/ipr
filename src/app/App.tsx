import "./styles/global.scss";
import "./styles/theme.scss";
import { useTheme } from "shared/features/theme";
import { RouterProvider } from "./routes";

export const App = () => {
    useTheme();
    return <RouterProvider />;
};

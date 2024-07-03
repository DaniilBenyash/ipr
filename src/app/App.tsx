import "./styles/global.scss";
import "./styles/theme.scss";
import { useTheme } from "shared/features/theme";
import { ReactRouter } from "./config/routerConfig/routerConfig";
export const App = () => {
    useTheme();
    return <ReactRouter />;
};

import "./styles/global.scss";
import "./styles/theme.scss";
import { useTheme } from "shared/features/theme";

export const App = () => {
    useTheme();
    return <div>Hello world!</div>;
};

import { useLayoutEffect } from "react";
import { defaultTheme } from "./constants";

export const useTheme = () => {
    useLayoutEffect(() => {
        document.body.dataset.theme = defaultTheme;
    }, []);
};

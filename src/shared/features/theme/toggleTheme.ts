import { LOCAL_STORAGE_THEME_KEY, Theme } from "./constants";

export const toggleTheme = () => {
    document.body.dataset.theme =
        document.body.dataset.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, document.body.dataset.theme);
};

export const LOCAL_STORAGE_THEME_KEY = "theme";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

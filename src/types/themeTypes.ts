type ColorPalette = {
    primary: string;
    primaryText: string;
    secondary: string;
    secondaryText: string;
};

/**
 * dark: whether to use status bar dark theme
 */
type ThemePalette = {
    dark: boolean;
    palette: ColorPalette;
};

type ThemeKey =
    | "light"
    | "dark"
    | "dimmed"
    | "rust"
    | "ayu"
    | "ocean"
    | "winter"
    | "green";

type ThemeName = ThemeKey | "custom";

type ThemeMap = {
    [key in ThemeKey]: ThemePalette;
};

/**
 * Theme with name
 */
interface Theme extends ThemePalette {
    name: string;
}

/**
 * Adds theme name to state
 */
type ThemeState = {
    current: Theme;
    custom: ThemePalette;
};

type ThemeAction =
    | {
        type: "CHANGE_THEME";
        name: ThemeName;
    }
    | {
        type: "CHANGE_CUSTOM_THEME";
        theme: ThemePalette;
    };
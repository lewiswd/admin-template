import { createContext, useContext } from "react";

import { Theme } from "@/types";

export type ThemeContextProps = {
    theme: Theme;
    changeTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextProps>(
    {} as ThemeContextProps
);

export const useTheme = (): ThemeContextProps => {
    const theme = useContext(ThemeContext);
    return theme;
};

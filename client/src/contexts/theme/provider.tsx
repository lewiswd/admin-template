import { ReactNode, useEffect, useMemo } from "react";

import { useTheme } from "@/hooks";

import { ThemeContext, ThemeContextProps } from "./context";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const { theme, changeTheme } = useTheme();

    const value: ThemeContextProps = useMemo(
        () => ({
            theme,
            changeTheme,
        }),
        [changeTheme, theme]
    );

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export default ThemeProvider;

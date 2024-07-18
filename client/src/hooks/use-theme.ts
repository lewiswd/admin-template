import { useCallback, useEffect, useState } from "react";

import { Theme } from "@/types";

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>("light");

    const changeTheme = useCallback((theme: Theme) => {
        // TODO: Update theme state in local storage
        localStorage.setItem("theme", theme);
        // TODO: Set theme state
        setTheme(theme);
    }, []);

    useEffect(() => {
        const themeSys = localStorage.getItem("theme");

        if (!themeSys) {
            // TODO Set theme state in local storage if not exist
            localStorage.setItem("theme", "light");
        } else {
            setTheme(themeSys as Theme);
        }
    }, []);

    return { theme, changeTheme } as const;
};

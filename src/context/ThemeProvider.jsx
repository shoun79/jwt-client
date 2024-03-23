import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    useEffect(() => {
        setTheme(JSON.parse(window.localStorage.getItem("theme") || "false"))
    }, [])

    const handleThemeChange = () => {
        setTheme(!theme)
        window.localStorage.setItem('theme', JSON.stringify(!theme))
    }

    const themeInfo = {
        theme,
        loading,
        handleThemeChange
    }

    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
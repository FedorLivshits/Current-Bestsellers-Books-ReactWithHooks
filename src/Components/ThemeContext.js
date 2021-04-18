import React, {useState} from 'react';

export const ThemeContext = React.createContext();

const BooksAppProvider = (props) => {
    let [theme, setTheme] = useState("light")

    const changeTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }

    return (
        <ThemeContext.Provider
            value={{
                changeTheme,
                theme
            }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default BooksAppProvider;
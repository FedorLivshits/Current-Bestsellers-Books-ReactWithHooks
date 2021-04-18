import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext";

function Header() {
    const {theme} = useContext(ThemeContext);
    return (
        <header className={`header ${theme}`}>
            <h1 className="title">
                Actual <br/>
                books <br/>
                bestsellers<br/>
                <div className="current-date">
                    on {new Date().toLocaleString('en', {weekday: 'long'})}
                    {" "}
                    {new Date().getDate()}
                    {" "}
                    {new Date().toLocaleString('en', {month: 'long'})}
                    {" "}
                </div>
            </h1>

        </header>
    )
}

export default Header;
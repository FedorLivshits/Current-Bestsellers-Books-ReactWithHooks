import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext";


function Switcher() {
    const {changeTheme} = useContext(ThemeContext);
    return (
        <label className="switch">
            <input type="checkbox" onClick={changeTheme}/>
            <span className="slider round"/>
        </label>

    )
}

export default Switcher
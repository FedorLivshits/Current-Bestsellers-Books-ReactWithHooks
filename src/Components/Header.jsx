import React from "react"

function Header() {
    return (
        <header className="header">
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
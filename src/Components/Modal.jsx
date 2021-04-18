import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext";

function Modal({activeModal, setActiveModal, children}) {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={activeModal ? "modal active" : "modal"} onClick={() => setActiveModal(false)}>
            <div className={`modal__content ${theme}`}
                 onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal

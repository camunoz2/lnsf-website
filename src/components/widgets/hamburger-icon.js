import React from "react"

import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



const HamburgerIcon = ({open, setOpen}) => {


    return (
        <div
            tabIndex={0}
            role="button"
            className="sm:hidden cursor-pointer text-gray-500 hover:text-white" 
            open={open}
            onClick={() => setOpen(!open)} 
            onKeyDown={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faBars} size="2x"/>
        </div>
    )
}

export default HamburgerIcon



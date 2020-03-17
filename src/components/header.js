import React from "react"
import Logo from "../assets/lnsf_insignia.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"


export default () => (
    <div className="container mx-auto">
        <img className="inline-block h-48" src={Logo} alt="Logo LNSF"/>
        <FontAwesomeIcon icon={faReact}/>
    </div>
)
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"




export default () => (
    <nav className="shadow-xl">
        <div className="sm:visible container mx-auto flex items-center py-4">
            <div>
                <ul className="hidden flex justify-start uppercase">
                    <li className="mr-8">Inicio</li>
                    <li className="mr-8">Mision y Vision</li>
                    <li className="mr-8">Docentes</li>
                    <li className="mr-8">Noticias</li>
                    <li className="mr-8">Alumnos</li>
                </ul>
            </div>
            <div className="flex justify-end flex-grow text-right">
                <FontAwesomeIcon icon={faYoutube} size="2x" className="mr-8 text-red-600"/>
                <FontAwesomeIcon icon={faFacebook} size="2x" className="mr-8 text-blue-600"/>
            </div>

        </div>
    </nav>
)
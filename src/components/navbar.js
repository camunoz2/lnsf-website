import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"


// add condition class invisible to nav, event from button press in header

export default () => (
    <nav className="shadow-xl">
        <div className="container mx-auto flex items-center py-4 px-2">
            <div>
                <ul className="flex flex-col uppercase">
                    <li className="cursor-pointer hover:bg-gray-500 px-2 py-1 rounded">Inicio</li>
                    <li className="cursor-pointer hover:bg-gray-500 px-2 py-1 rounded">Mision y Vision</li>
                    <li className="cursor-pointer hover:bg-gray-500 px-2 py-1 rounded">Docentes</li>
                    <li className="cursor-pointer hover:bg-gray-500 px-2 py-1 rounded">Noticias</li>
                    <li className="cursor-pointer hover:bg-gray-500 px-2 py-1 rounded">Alumnos</li>
                </ul>
            </div>
            <div className="hidden flex justify-end flex-grow text-right">
                <FontAwesomeIcon icon={faYoutube} size="2x" className="mr-8 text-red-600"/>
                <FontAwesomeIcon icon={faFacebook} size="2x" className="mr-8 text-blue-600"/>
            </div>

        </div>
    </nav>
)
import React from "react"
import MenuItem from "./widgets/menu-item"
import Button  from "./widgets/button"
import HamburgerIcon from "./widgets/hamburger-icon"

import Logo from "../assets/lnsf_logo.png"

import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

export default ({open, setOpen}) => {

    return(
        <div className="flex justify-around sm:justify-between items-center py-4 px-4 bg-gray-800">
            <div className="flex justify-between items-center container mx-auto">
                <div className="flex items-center">
                    <img className="hidden md:block w-20 mr-4" src={Logo} alt="logo liceo nibaldo sepulveda"></img>

                    <div className="text-white">
                        <h1 className="font-light sm:font-bold">Liceo Municipal</h1>
                        <h1 className="font-light sm:font-bold">Nibaldo Sepúlveda Fernández</h1>
                        <p className="hidden font-light lg:block">Lideres en innovación pedagógica</p>
                    </div>
                </div>

                <div className="hidden lg:flex justify-end flex-grow">
                    <MenuItem
                        icon = {faCalendarAlt}
                        title = "Calendario"
                        desc = "Revisa fechas importantes"
                    />
                    <MenuItem
                        icon = {faUser}
                        title = "Alumnos"
                        desc = "Clases y cursos"
                    />
                    <MenuItem
                        icon = {faChalkboardTeacher}
                        title = "Escuela"
                        desc = "Actividades y noticias"
                    />
                </div>

                <div className="hidden sm:block">
                    <Button
                        text = 'Contacto'
                        icon = {faPaperPlane}
                    />
                </div>
            
                <HamburgerIcon open={open} setOpen={setOpen}/>
            </div>

        </div>

    )

}
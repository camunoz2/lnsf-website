import React from "react"
import Layout from "../components/layout"
import MenuItem from "./widgets/menu-item"
import Button  from "./widgets/button"

import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"



import Logo from "../assets/lnsf_logo.png"

export default () => (
    <Layout>
        <div className="py-4 bg-gray-800">
            <div className="container mx-auto flex items-center">
                <div className="flex">
                    <img className="w-20 mr-4" src={Logo} alt="logo liceo nibaldo sepulveda"></img>

                    <div className="text-white">
                        <h1 className="font-bold">Liceo Municipal</h1>
                        <h1 className="font-bold">Nibaldo Sepúlveda Fernández</h1>
                        <p className="font-light">Lideres en innovación pedagógica</p>
                    </div>
                </div>

                <div className="flex justify-end flex-grow">
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
                    <Button
                        text = 'Contacto'
                        icon = {faPaperPlane}
                    />
                </div>
            </div>
        </div>
    </Layout>
)
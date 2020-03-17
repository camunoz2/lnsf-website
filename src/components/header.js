import React from "react"
import Layout from "../components/layout"

import Logo from "../assets/lnsf_insignia.png"



export default () => (
    <Layout>
        <div className="flex uppercase mb-6">

            <div className="flex flex-initial mt-6">
                <img className="inline-block h-48 mr-8" src={Logo} alt="Logo LNSF"/>
                <div className="inline-block w-40">
                    <div className="text-sm font-bold">Liceo Nibaldo Sepúlveda Fernández</div>
                    <div className="text-sm font-light">Portezuelo - Líderes en innovación pedagógica</div>
                </div>
            </div>

            <div className="flex-auto">
                <div className="flex flex-row justify-around bg-black text-white py-1">
                    <h2>Inicio</h2>
                    <h2>Cursos</h2>
                    <h2>Docentes</h2>
                    <h2>Noticias</h2>
                    <h2>Contacto</h2>
                </div>
                <div className="flex flex-row justify-around text-gray-800 mt-6 text-right">

                    <div>
                        <h2 className="text-3xl font-bold">Sobre</h2>
                        <h3>Nuestro cuerpo docente</h3>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold">Proyectos</h2>
                        <h3>De innovacion pedagógica</h3>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold">Misión</h2>
                        <h3>Visión y proyecto educativo</h3>
                    </div>
                </div>
            </div>

        </div>
    </Layout>
)
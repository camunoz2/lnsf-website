import React from 'react'
import {Link} from 'gatsby'
import insignia from "../assets/lnsf_insignia.png"

export default () => {
    return (
        <div className="bg-blue-400 h-screen flex justify-center items-center px-10">
            <div className="flex flex-col items-center justify-center">
                <div>
                    <img className="w-26 mb-10" src={insignia} alt="logo lnsf"/>
                </div>
                <div className="text-center">
                    <h1 className="text-bold text-xl text-center" >Hola, el sitio que estaba acá esta en mantención o fue movido a otro lado</h1>
                    <Link to="/" className="text-center text-white">Volver al sitio</Link>
                </div>
            </div>

        </div>
    )
}
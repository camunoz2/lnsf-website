import React from "react"
import Logo from "../assets/lnsf_logo@2x.png"

const Footer = () => {
  return (
    <div className="bg-gray-700 py-10 mt-16">
      <div className="grid grid-cols-8">
        <div className="p-4 col-span-8 sm:col-start-3 sm:col-span-2">
          <h2 className="text-white font-display text-3xl text-center sm:text-left py-4">
            Nuestro colegio
          </h2>
          <p className="text-center text-gray-200 sm:text-left">
            Nuestro Liceo se caracteriza por restacatar las tradiciones del
            campo, y ademas de profundizar en la innovacion pedagogica continua
          </p>
        </div>

        <div className="p-4 col-span-8 sm:col-span-2">
          <h2 className="text-white font-display text-3xl text-center py-4 sm:text-left">
            Mapa del sitio
          </h2>
          <ul className="text-center text-gray-200 sm:text-left">
            <li>Alumnos</li>
            <li>Docentes</li>
            <li>Noticias</li>
            <li>Calendario</li>
          </ul>
        </div>
        <div className="px-24 col-span-8 sm:col-span-2">
          <img
            className="w-full"
            src={Logo}
            alt="logo liceo nibaldo sepulveda"
          ></img>
        </div>
      </div>
    </div>
  )
}

export default Footer

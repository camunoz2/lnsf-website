import React from "react"
import Card from "../components/widgets/card"

export default () => (


        <div className="flex">
            <div className="bg-gray-200 w-1/4">
                <ul className="py-10 px-5">
                    <h1 className="font-bold text-xl text-gray-800 mb-5">Visita nuestras Salas Tematicas</h1>
                    <li className="font-hairline text-gray-800 mb-5 text-lg">-- Sala de Historia</li>
                    <li className="font-hairline text-gray-800 mb-5 text-lg">-- Sala de Lenguaje</li>
                    <li className="font-hairline text-gray-800 mb-5 text-lg">-- Sala de Ciencias</li>
                    <li className="font-hairline text-gray-800 mb-5 text-lg">-- Sala de Musica</li>
                    <li className="font-hairline text-gray-800 mb-5 text-lg">-- Sala de Artes</li>
                </ul>
            </div>
            <div className="w-3/4 flex">
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>


        </div>

)
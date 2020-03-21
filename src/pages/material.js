import React from "react"
import { Card } from "primereact/card"
import insignia from "../assets/lnsf_insignia.png"

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default () => {

    return (
        <div className="flex flex-col h-screen">
        <div className="flex-grow object-scale-down flex items-center justify-center bg-gray-500">
                <img className="h-20 sm:h-32 my-4 sm:my-0 max-h-md" src={insignia} alt="insignia liceo nibaldo sepulveda fernandez"></img>
        </div>
        <div className="flex-grow flex flex-wrap items-center justify-center">
            <Card style={{backgroundColor: '#ffe75e'}} className="w-1/4 m-2" title="1ro Básico" subTitle="Prof. David Muñoz">
            </Card>
            <Card style={{backgroundColor: '#687466'}} className="w-1/4 m-2" title="2do Básico" subTitle="Prof. Candelaria Jimenez">
            </Card>
            <Card style={{backgroundColor: '#cd8d7b'}} className="w-1/4 m-2" title="3ro Básico" subTitle="Prof. Margot Acuña">
            </Card>
            <Card style={{backgroundColor: '#fbc490'}} className="w-1/4 m-2" title="4to Básico" subTitle="Prof. Patricia Parada">
            </Card>
            <Card style={{backgroundColor: '#de7119'}} className="w-1/4 m-2" title="5to Básico" subTitle="Prof. Mariela Mendoza">
            </Card>
            <Card style={{backgroundColor: '#dee3e2'}} className="w-1/4 m-2" title="6to Básico" subTitle="Prof. Lidia Quiroz">
            </Card>
            <Card style={{backgroundColor: '#18b0b0'}} className="w-1/4 m-2" title="7mo Básico" subTitle="Prof. Paula Jimenez">
            </Card>
            <Card style={{backgroundColor: '#9dc6a7'}} className="w-1/4 m-2" title="8vo Básico" subTitle="Prof. Rosana Quiroz">
            </Card>
            <Card style={{backgroundColor: '#fbcffc'}} className="w-1/4 m-2" title="1ro Medio" subTitle="Prof. Susana Jara">
            </Card>
            <Card style={{backgroundColor: '#75daad'}} className="w-1/4 m-2" title="2do Medio" subTitle="Prof. Fernanda Concha">
            </Card>
            <Card style={{backgroundColor: '#7f78d2'}} className="w-1/4 m-2" title="3ro Medio" subTitle="Prof. Maria Escares">
            </Card>
            <Card style={{backgroundColor: '#d63447'}} className="w-1/4 m-2" title="4to Medio" subTitle="Prof. Claudio Fernández">
            </Card>
        </div>
        <div className="flex-grow flex items-center justify-center bg-blue-800">
            <h1 className="text-center text-white">Liceo Nibaldo Sepulveda Portezuelo 2020</h1>
        </div>
    </div>

    )
}
   
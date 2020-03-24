import React from "react"
import { Card } from "primereact/card"
import insignia from "../assets/lnsf_insignia.png"

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default () => {

    const footer = (link) => <a className="px-1 py-2 bg-white text-black flex justify-center items-center" href={link}>Ver <i className="pi pi-folder"></i></a>

    return (
        <div className="flex flex-col h-screen">
        <div className="flex-grow object-scale-down flex items-center justify-center bg-gray-500">
                <img className="h-20 sm:h-32 my-4 sm:my-0 max-h-md" src={insignia} alt="insignia liceo nibaldo sepulveda fernandez"></img>
        </div>
        <div className="flex-grow flex flex-wrap items-center justify-center">


            <a href="https://drive.google.com/open?id=1I5Et7M2IUHS-6SCoXhqbfRvTqeSypOUr">
            </a>
                <Card style={{backgroundColor: '#ffe75e'}} className="w-1/4 m-2" title="1ro Básico" subTitle="Prof. David Muñoz" footer={footer("https://drive.google.com/open?id=1I5Et7M2IUHS-6SCoXhqbfRvTqeSypOUr")}>
                </Card>
                


                <Card style={{backgroundColor: '#687466'}} className="w-1/4 m-2" title="2do Básico" subTitle="Prof. Candelaria Jimenez" footer={footer("https://drive.google.com/open?id=1dC-WKE2Pgdl86PbHJMR91JsnYhAYvU-N")}>
                </Card>
                


                <Card style={{backgroundColor: '#cd8d7b'}} className="w-1/4 m-2" title="3ro Básico" subTitle="Prof. Margot Acuña" footer={footer("https://drive.google.com/open?id=1xE1O1wbKX85c0P1Q6zJHfjfsuC7zPLo2")}>
                </Card>
                


                <Card style={{backgroundColor: '#fbc490'}} className="w-1/4 m-2" title="4to Básico" subTitle="Prof. Patricia Parada" footer={footer("https://drive.google.com/open?id=1H83j26AQ_sa-1Ek9pb52GS3Q-D91so9m")}>
                </Card>
                


                <Card style={{backgroundColor: '#de7119'}} className="w-1/4 m-2" title="5to Básico" subTitle="Prof. Mariela Mendoza" footer={footer("https://drive.google.com/open?id=1Dra4LTuydpLuPauDUH4Aq3ciTiHBvSdm")}>
                </Card>
                


                <Card style={{backgroundColor: '#dee3e2'}} className="w-1/4 m-2" title="6to Básico" subTitle="Prof. Lidia Quiroz" footer={footer("https://drive.google.com/open?id=1b0j2AytlyZ_fK_0PRAbKdswsLeeXXu2q")}>
                </Card>
                


                <Card style={{backgroundColor: '#18b0b0'}} className="w-1/4 m-2" title="7mo Básico" subTitle="Prof. Paula Jimenez" footer={footer("https://drive.google.com/open?id=1q6uiwPZBXsXKTvSN7Subjj6y5ZfGY7Cy")}>
                </Card>
                


                <Card style={{backgroundColor: '#9dc6a7'}} className="w-1/4 m-2" title="8vo Básico" subTitle="Prof. Rosana Quiroz" footer={footer("https://drive.google.com/open?id=1CwNzQQwStR0xPClx9YMHSHSpHJz0Z1Xq")}>
                </Card>
                


                <Card style={{backgroundColor: '#fbcffc'}} className="w-1/4 m-2" title="1ro Medio" subTitle="Prof. Susana Jara" footer={footer("https://drive.google.com/open?id=12LVZtnUFJ95jLe9xl-PvWENwbcSdWfgD")}>
                </Card>
                


                <Card style={{backgroundColor: '#75daad'}} className="w-1/4 m-2" title="2do Medio" subTitle="Prof. Fernanda Concha" footer={footer("https://drive.google.com/open?id=1VfPXEvBd6nvMHfbYwIPUmol0Bm8yNoO_")}>
                </Card>
                


                <Card style={{backgroundColor: '#7f78d2'}} className="w-1/4 m-2" title="3ro Medio" subTitle="Prof. Maria Escares" footer={footer("https://drive.google.com/open?id=1Wv7sb1KhrFr_G3Bi__a4WNSzO05uUKfe")}>
                </Card>
                


                <Card style={{backgroundColor: '#d63447'}} className="w-1/4 m-2" title="4to Medio" subTitle="Prof. Claudio Fernández" footer={footer("https://drive.google.com/open?id=14BH0SRQlwOVyWJ4WZLvTq2NI6TCHwjJI")}>
                </Card>
                

        </div>
        <div className="flex-grow flex items-center justify-center bg-blue-800">
            <h1 className="text-center text-white">Liceo Nibaldo Sepulveda Portezuelo 2020</h1>
        </div>
    </div>

    )
}
   
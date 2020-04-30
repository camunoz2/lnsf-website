import React from "react"
import Feature from "../components/widgets/feature"

import {
  faChalkboardTeacher,
  faAllergies,
  faAnkh,
  faAsterisk,
} from "@fortawesome/free-solid-svg-icons"

export default () => (
  <div className="grid grid-cols-4">
    <div className="col-span-4 md:col-span-2 lg:col-span-1">
      <Feature
        title="Pandemia"
        featureColor="yellow-600"
        faIcon={faAllergies}
        iconBoxBackgroundColor="white"
        iconColor="yellow-600"
        textColor="white"
      >
        Como educar en la situacion actual de Pandemia. Educacion a distancia
        desde el hogar
      </Feature>
    </div>
    <div className="col-span-4 md:col-span-2 lg:col-span-1">
      <Feature
        featureColor="gray-200"
        faIcon={faChalkboardTeacher}
        iconBoxBackgroundColor="blue-400"
        iconColor="white"
        title="Nuestros alumnos"
      >
        Los alumnos podran ingresar a su plataforma en classroom desde el
        miercoles a las 10 Hrs, esten atentos!.
      </Feature>
    </div>
    <div className="col-span-4 md:col-span-2 lg:col-span-1">
      <Feature
        featureColor="gray-200"
        faIcon={faAnkh}
        iconBoxBackgroundColor="green-400"
        iconColor="white"
        title="Apoderados"
      >
        Sabemos que es dificil para los apoderados tratar los temas educativos
        con sus hijos, aca algunos Tips.
      </Feature>
    </div>

    <div className="col-span-4 md:col-span-2 lg:col-span-1">
      <Feature
        featureColor="gray-200"
        faIcon={faAsterisk}
        iconBoxBackgroundColor="purple-700"
        iconColor="white"
        title="Noticias Mayo"
      >
        Nuestros docentes estan preparando sus clases para enfrentar el mes de
        mayo de la mejor manera.
      </Feature>
    </div>
  </div>
)

import React from "react"
import Feature from "../components/widgets/feature"

import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons"

export default () => (
  <div className="grid grid-cols-4">
    <div className="col-span-4 md:col-span-2 lg:col-span-1">
      <Feature
        featureColor="yellow-600"
        faIcon={faChalkboardTeacher}
        iconBoxBackgroundColor="white"
        iconColor="yellow-600"
        textColor="white"
      >
        Eu qui occaecat ut duis eu consectetur magna labore officia in mollit
        enim ex veniam.
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
        Eu qui occaecat ut duis eu consectetur magna labore officia in mollit
        enim ex veniam.
      </Feature>
    </div>
    <div className="col-span-4 md:col-span-2 lg:col-span-1">
      <Feature
        featureColor="gray-200"
        faIcon={faChalkboardTeacher}
        iconBoxBackgroundColor="green-400"
        iconColor="white"
      >
        Eu qui occaecat ut duis eu consectetur magna labore officia in mollit
        enim ex veniam.
      </Feature>
    </div>

    <div className="col-span-4 md:col-span-2 lg:col-span-1">
      <Feature
        featureColor="gray-200"
        faIcon={faChalkboardTeacher}
        iconBoxBackgroundColor="purple-700"
        iconColor="white"
      >
        Eu qui occaecat ut duis eu consectetur magna labore officia in mollit
        enim ex veniam.
      </Feature>
    </div>
  </div>
)

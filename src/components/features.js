import React from "react"
import Feature from "../components/widgets/feature"

import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons"


export default () => (
    <div className="flex">
        <div className="bg-yellow-600 w-1/4">
            <div className="flex justify-around">
                <Feature 
                    featureColor="yellow-600"
                    faIcon={faChalkboardTeacher} 
                    iconBoxBackgroundColor="white" 
                    iconColor="yellow-600"
                    textColor="white">
                        Eu qui occaecat ut duis eu consectetur magna labore officia in mollit enim ex veniam.
                </Feature>
            </div>
        </div>

        <div className="w-3/4 flex">
            <Feature 
                featureColor="gray-200"
                faIcon={faChalkboardTeacher} 
                iconBoxBackgroundColor="blue-400" 
                iconColor="white"
                title="Nuestros alumnos">
                    Eu qui occaecat ut duis eu consectetur magna labore officia in mollit enim ex veniam.
            </Feature>

            <Feature 
                featureColor="gray-200"
                faIcon={faChalkboardTeacher} 
                iconBoxBackgroundColor="green-400" 
                iconColor="white">
                    Eu qui occaecat ut duis eu consectetur magna labore officia in mollit enim ex veniam.
            </Feature>

            <Feature 
                featureColor="gray-200"
                faIcon={faChalkboardTeacher} 
                iconBoxBackgroundColor="purple-700" 
                iconColor="white">
                    Eu qui occaecat ut duis eu consectetur magna labore officia in mollit enim ex veniam.
            </Feature>
        </div>


    </div>
)
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default (props) => (
    <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
        <span class="mr-2">{props.text}</span>
        <FontAwesomeIcon icon={props.icon} />
    </button>
)
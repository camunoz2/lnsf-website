import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default (props) => {

    return (
        <div className={`bg-${props.featureColor || 'indigo-500'} py-10 px-5 text-${props.textColor || 'black'}`}>
            <div className="flex mb-5">
                <div className={`bg-${props.iconBoxBackgroundColor || 'black'} p-2 rounded shadow mr-4 flex items-center self-center`}>
                    <FontAwesomeIcon className={`text-${props.iconColor || 'indigo-500'}`} icon={props.faIcon} size="2x"></FontAwesomeIcon>
                </div>
                <h1 className="font-bold text-xl">{props.title || 'Bienvenidos a nuestro Liceo'}</h1>
            </div>
            <div className="text-left">
                <p className="font-hairline">{props.children}</p>
            </div>
        </div>
    )
}

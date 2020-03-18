import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default (props) => (
<div className="text-white mr-8">
    <FontAwesomeIcon icon={props.icon} className="inline mr-2"/>
<h1 className="font-bold inline">{props.title}</h1>
<p className="font-light">{props.desc}</p>
</div>
)
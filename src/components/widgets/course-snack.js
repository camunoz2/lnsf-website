import React from "react"

const CourseSnack = ({ course, code }) => {
  return (
    <li className="border-double border-1 py-4">
      <h3 className="text-blue-200">{course}</h3>
      <p className="text-white">
        Codigo de la clase: <b>{code}</b>
      </p>
    </li>
  )
}

export default CourseSnack

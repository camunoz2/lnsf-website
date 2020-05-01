import React from "react"

const CourseModal = ({ open, closeModal }) => {
  return (
    <div
      className={`bg-gray-600 w-full p-4 absolute t-0 l-0 r-0 b-0 ${
        open ? "hidden" : ""
      }`}
    >
      <button
        className="bg-green-400 px-4 py-2 border-1 rounded shadow"
        onClick={closeModal}
      >
        Volver
      </button>
      <ul>
        <li className="border-double border-1 py-4">
          <h3 className="text-blue-200">Lenguaje</h3>
          <p className="text-white">
            Codigo de la clase: <b>435LM7</b>
          </p>
        </li>
        <li className="border-double border-1 py-4">
          <h3 className="text-blue-200">Matematicas</h3>
          <p className="text-white">
            Codigo de la clase: <b>LM3B7</b>
          </p>
        </li>
        <li className="border-double border-1 py-4">
          <h3 className="text-blue-200">Ciencias Naturales</h3>
          <p className="text-white">
            Codigo de la clase: <b>XBLM4</b>
          </p>
        </li>
      </ul>
    </div>
  )
}

export default CourseModal

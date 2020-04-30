import React from "react"
import Button from "../components/widgets/button"
import { faPersonBooth } from "@fortawesome/free-solid-svg-icons"
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons"

const Hero = () => {
  return (
    <div className="bg-teal-500">
      <div className="container mx-auto py-12">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-center text-white text-3xl">Bienvenidos</h2>
          <h3 className="text-3xl text-white text-center font-display md:text-6xl">
            Al Nibaldo Sepulveda Fernandez
          </h3>
          <div className="container mx-auto">
            <div className="flex text-center py-4 justify-center">
              <div className="mr-2 md:mr-12">
                <Button text="Soy Alumno" icon={faPersonBooth} />
              </div>
              <div>
                <Button text="Soy Profesor" icon={faChalkboardTeacher} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

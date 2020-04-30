import React from "react"
import backgroundImage from "../assets/bg.jpg"

const Hero = () => {
  return (
    <div
      className="w-full mx-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})`, height: "400px" }}
    >
      <div className="container mx-auto py-12">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-center text-white text-6xl">Bienvenidos</h2>
          <h3 className="text-white font-display text-4xl">Al Nibaldo</h3>
        </div>
      </div>
    </div>
  )
}

export default Hero

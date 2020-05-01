import React from "react"

const EventCard = () => {
  return (
    <div>
      <div className="flex flex-col border-2 shadow">
        <div className="flex items-center justify-start p-4 pb-0 bg-gray-200">
          <h2 className="font-bold text-lg mr-4 self-start text-gray-800">
            24 de Mayo
          </h2>
          <div className="bg-blue-500 px-2 py-1 text-sm font-hairline text-white">
            Viernes
          </div>
        </div>
        <div className="text-gray-800 p-4 bg-gray-200">
          <p>Celebraremos el dia del asistente en el comedor del liceo.</p>
        </div>
      </div>
    </div>
  )
}

export default EventCard

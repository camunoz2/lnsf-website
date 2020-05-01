import React from "react"

const EventCard = ({ course, teacher, lastUpdated, tooggleModal }) => {
  return (
    <div className="bg-gray-200">
      <div className="flex flex-col border-2 shadow p-4">
        <div className="flex items-center justify-start">
          <h2 className="font-bold text-lg mr-4 self-start text-gray-800">
            {course}
          </h2>
          <div className=" border border-1 border-blue-500 px-2 py-1 text-sm font-hairline text-blue-500">
            {teacher}
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-gray-800">{lastUpdated}</p>
          </div>
          <button
            onClick={tooggleModal}
            className="bg-green-300 py-1 px-4 shadow rounded"
          >
            Abrir curso
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventCard

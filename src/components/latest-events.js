import React from "react"
import EventCard from "./widgets/event-card"

const LatestEvents = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 md:col-start-2 md:col-span-1">
        <EventCard />
      </div>
      <div className="col-span-4 md:col-span-1">
        <EventCard />
      </div>
      <div className="col-span-4 md:col-start-2 md:col-span-1">
        <EventCard />
      </div>
      <div className="col-span-4 md:col-span-1">
        <EventCard />
      </div>
    </div>
  )
}

export default LatestEvents

import React, { useState } from "react"
import Layout from "../components/layout"
import CourseCard from "../components/widgets/course-card"
import CourseSnack from "../components/widgets/course-snack"
import JSONdata from "../components/courseData.json"

const Alumni = () => {
  const [currentCourse, setCurrentCourse] = useState({
    open: false,
    course: "",
  })

  const handleCourse = value => {
    if (currentCourse.open) {
      setCurrentCourse({ open: false, course: value })
    } else setCurrentCourse({ open: true, course: value })
  }

  return (
    <Layout>
      <div
        className={`bg-gray-600 w-full p-4 absolute t-0 l-0 r-0 b-0 ${
          currentCourse.open ? "" : "hidden"
        }`}
      >
        <button
          className="bg-green-400 px-4 py-2 border-1 rounded shadow"
          onClick={() => setCurrentCourse({ open: false })}
        >
          Volver
        </button>
        <ul>
          {JSONdata.filter(
            course => course.course === currentCourse.course
          ).map(currentClass =>
            currentClass.classes.map(singleClass => (
              <CourseSnack
                course={singleClass.name}
                code={singleClass.classroomCode}
                key={singleClass.classroomCode}
              />
            ))
          )}
        </ul>
      </div>

      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3">
            <h2 className="text-4xl font-display text-center py-4">
              Escoge tu curso
            </h2>
          </div>
          {JSONdata.map(classroom => {
            return (
              <div className="col-span-3 md:col-span-1" key={classroom.course}>
                <CourseCard
                  key={classroom.course}
                  course={classroom.course}
                  teacher={classroom.tutor}
                  lastUpdated="24 de Marzo"
                  handleCourse={value => handleCourse(value)}
                />
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Alumni

import React, { useState } from "react"
import Layout from "../components/layout"
import CourseCard from "../components/widgets/course-card"
import CourseModal from "../components/widgets/course-modal"

const Alumni = () => {
  const [open, setOpen] = useState(false)
  const tooggleModal = () => {
    if (open) {
      setOpen(false)
    } else setOpen(true)
    console.log(open)
  }

  return (
    <Layout>
      <CourseModal open={open} closeModal={tooggleModal} />

      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3">
            <h2 className="text-4xl font-display text-center py-4">
              Escoge tu curso
            </h2>
          </div>
          <div className="col-span-3 md:col-span-1">
            <CourseCard
              course="1ro Basico"
              teacher="Patricia Parada"
              lastUpdated="24 de Marzo"
              tooggleModal={tooggleModal}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <CourseCard
              course="2do Basico"
              teacher="Margot Acuña"
              lastUpdated="16 de Abril"
              tooggleModal={tooggleModal}
            />
          </div>
          <div className="col-span-3 md:col-span-1">
            <CourseCard
              course="3ro Basico"
              teacher="Margot Acuña"
              lastUpdated="16 de Abril"
              tooggleModal={tooggleModal}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Alumni

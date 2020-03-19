import React from "react"
import { Carousel } from "primereact/carousel"


export default ({ data }) => {

    const carouselTemplate = (data) => {
        return(
            <div>
                <h1>Title: {data.node.title}</h1>
                <h1>slug: {data.node.slug}</h1>
            </div>
        );
    }

    return(
        <Carousel value={data} itemTemplate={carouselTemplate}></Carousel>
    )
}
import React from "react"
import { Carousel } from "primereact/carousel"

import "primereact/resources/themes/nova-light/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"


export default ({ data }) => {

    const carouselTemplate = (data) => {
        return(
            <div className="h-64 flex items-end justify-center">
                <div className="bg-white rounded p-6">
                    <div className="text-center text-black text-xl font-bold">{data.node.title}</div>

                </div>
            </div>
        );
    }
    

    return(
        <div>
            <Carousel 
            className="bg-gray-300 pt-8"
            value={data} 
            itemTemplate={carouselTemplate} 
            numVisible={1} 
            numScroll={1} 
            autoplayInterval={3000}
            circular={true}
            >

            </Carousel>
        </div>
    )
}
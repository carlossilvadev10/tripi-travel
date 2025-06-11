import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import HotelCard from "./HotelCard";
import { hotelsData } from "@/data/data";

const Hotel = () => {
    return (
        <div className = "pt-10 pb-20">
            {/* Section heading */}
            <SectionHeading heading = "Tu estancia ideal te espera" description = "Descansa en los mejores alojamientos, seleccionados por su comodidad, ubicación y experiencias inolvidables. 🏨✨" />
            <div className = "w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
                {/* HotelCard */}
                {hotelsData.map((data, i) => {
                    return (
                        <div key = {data.id} className = "" data-aos = "fade-right" data-aos-anchor-placement = "top-center" data-aos-delay = {`${i * 100}`}>
                            <HotelCard hotel = {data} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Hotel;
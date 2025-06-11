import React from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
    return (
        <div className = "pt-20 pb-20">
            {/* Section heading */}
            <SectionHeading heading = "Explora destinos populares" description = "Embárcate en nuevas rutas, descubre culturas vibrantes y vive experiencias que contarás toda la vida. 🌎🔥" />
            {/* Section content */}
            <div className = "mt-14 w-[80%] mx-auto">
                {/* Slider */}
                <DestinationSlider />
            </div>
        </div>
    )
}

export default Destination;
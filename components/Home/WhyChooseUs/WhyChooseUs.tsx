import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChooseUs = () => {
    return (
        <div className = "pt-10 pb-30">
            {/* Section heading */}
            <SectionHeading heading = "Lo que nos hace diferentes" description = "Cada detalle cuenta cuando se trata de tu comodidad." />
            <div className = "grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
                {/* Why choose card */}
                <div className = "">
                    <WhyChooseCard image = "/images/c1.svg" title = "Garantía del mejor precio" description = "Te aseguramos las tarifas más competitivas del mercado para que disfrutes más por menos." data-aos = "fade-up" data-aos-anchor-placement = "top-center" />
                </div>
                <div className = "">
                    <WhyChooseCard image = "/images/c2.svg" title = "Reserva fácil y rápida" description = "Con solo unos clics, tendrás tu alojamiento reservado sin complicaciones ni demoras." data-aos = "fade-up" data-aos-anchor-placement = "top-center" data-aos-delay = "150" />
                </div>
                <div className = "">
                    <WhyChooseCard image = "/images/c3.svg" title = "Atención al cliente 24/7" description = "Nuestro equipo está disponible todo el día, todos los días, para ayudarte en lo que necesites." data-aos = "fade-up" data-aos-anchor-placement = "top-center" data-aos-delay = "300" />
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;
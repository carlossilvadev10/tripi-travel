import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
    return (
        <div className = "pt-20 pb-20">
            {/* Section heading */}
            <SectionHeading heading = "Noticias de viajes emocionantes para ti" description = "Mantente al día con las últimas novedades del mundo del turismo y la aventura." />
            <div className = "w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
                <div className = "" data-aos = "fade-left" data-aos-anchor-placement = "top-center">
                    <NewsCard image = "/images/n1.jpg" title = "Los 10 mejores lugares para visitar en Australia" date = "15 de agosto del 2025" />
                </div>
                <div className = "" data-aos = "fade-left" data-aos-anchor-placement = "top-center" data-aos-delay = "100">
                    <NewsCard image = "/images/n2.jpg" title = "Los 10 mejores lugares para visitar en Bangladés" date = "25 de agosto del 2025" />
                </div>
                <div className = "" data-aos = "fade-left" data-aos-anchor-placement = "top-center" data-aos-delay = "200">
                    <NewsCard image = "/images/n3.jpg" title = "Los 10 mejores lugares para visitar en Pakistán" date = "03 de setiembre del 2025" />
                </div>
                <div className = "" data-aos = "fade-left" data-aos-anchor-placement = "top-center" data-aos-delay = "300">
                    <NewsCard image = "/images/n4.jpg" title = "Los 10 mejores lugares para visitar en Nueva Zelanda" date = "18 de setiembre del 2025" />
                </div>
            </div>
        </div>
    )
}

export default News;
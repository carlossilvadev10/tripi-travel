import React from "react";
import { FaStar } from "react-icons/fa6";
import ReviewsSlider from "./ReviewsSlider";

const Reviews = () => {
    return (
        <div className = "pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]">
            <div className = "w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Text content */}
                <div className = "">
                    <h1 className = "text-2xl font-semibold text-white">
                        Ellos ya viajaron con nosotros
                    </h1>
                    <p className = "mt-6 text-gray-200 text-justify">
                        Descubre lo que vivieron quienes confiaron en nosotros para hacer realidad su próxima aventura y cómo transformamos sus viajes en recuerdos inolvidables.
                    </p>
                    {/* Ratings */}
                    <div className = "mt-6 flex items-center space-x-6">
                        <div className = "">
                            <p className = "text-2xl font-bold text-white">
                                4.88
                            </p>
                            <p className = "text-white mb-2">
                                Calificación promedio
                            </p>
                            <div className = "flex items-center">
                                <FaStar className = "text-white" />
                                <FaStar className = "text-white" />
                                <FaStar className = "text-white" />
                                <FaStar className = "text-white" />
                                <FaStar className = "text-white" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slider */}
                <div className = "overflow-hidden">
                    <ReviewsSlider />
                </div>
            </div>
        </div>
    )
}

export default Reviews;
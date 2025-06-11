"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { destinationData } from "@/data/data";
import Image from "next/image";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1424 },
        items: 5,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1424, min: 764 },
        items: 3,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
}

const DestinationSlider = () => {
    return (
        <Carousel responsive = {responsive} infinite = {true} autoPlay = {true} autoPlaySpeed = {3000} keyBoardControl = {true}>
            {destinationData.map((data) => {
                return (
                    <div key = {data.id} className = "m-3">
                        {/* Image div */}
                        <div className = "relative h-[400px]">
                            {/* Overlay */}
                            <div className = "absolute inset-0 bg-black opacity-25 rounded-lg"></div>
                            {/* Image */}
                            <Image src = {data.image} alt = {data.country} width = {500} height = {500} className = "h-full w-full object-cover rounded-lg" />
                        </div>
                        {/* Text content */}
                        <h1 className = "text-lg font-semibold mt-4">
                            {data.country}
                        </h1>
                        <p className = "text-sm text-gray-600">
                            {data.travelers} viajeros
                        </p>
                    </div>
                )
            })}
        </Carousel>
    )
}

export default DestinationSlider;
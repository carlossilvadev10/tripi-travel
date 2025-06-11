"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotel from "./Hotel/Hotel";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Reviews from "./Reviews/Reviews";
import News from "./News/News";
import Newsletter from "../Newsletter/Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        const initAOS = async() => {
            await import("aos");
            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom",
            })
        }
        initAOS();
    }, []);

    return (
        <div className = "overflow-hidden">
            <Hero />
            <Destination />
            <Hotel />
            <WhyChooseUs />
            <Reviews />
            <News />
            <Newsletter />
        </div>
    )
}

export default Home;
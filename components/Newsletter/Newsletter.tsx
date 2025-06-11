import React from "react";
import { BsEnvelopePaper } from "react-icons/bs";

const Newsletter = () => {
    return (
        <div className = "pt-16 pb-16 bg-black flex flex-col items-center justify-center w-full">
            <BsEnvelopePaper className = "w-16 h-16 mt-10 text-white" />
            <h1 className = "text-lg sm:text-xl md:text-2xl text-white font-semibold mt-5 tracking-widest text-center">
                Empieza tu próxima aventura con nosotros
            </h1>
            <p className = "mt-3 text-white text-xs sm:text-sm text-center">
                Regístrate y te enviaremos las mejores ofertas para que viajes más y mejor.
            </p>
            {/* Subscription input and buttons */}
            <div className = "w-full">
                <input type = "email" name = "email" id = "email" className = "px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none" placeholder = "Email" />
                <button className = "px-6 py-3.5 bg-blue-900 hover:bg-blue-950 text-white transition-all duration-200 mt-4 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none">
                    Suscribirse
                </button>
            </div>
        </div>
    )
}

export default Newsletter;
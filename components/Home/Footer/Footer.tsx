import React from "react";
import FooterSection from "./FooterSection";
import FooterContact from "./FooterContact";
import Link from "next/link";
import { FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className = "pt-16 pb-16">
            <div className = "w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {/* 1st part */}
                <FooterSection title = "Empresa" items = {[ "Sobre nosotros", "Empleos", "Blogs", "Tarjetas de regalo", "Revistas" ]} />
                {/* 2nd part */}
                <FooterSection title = "Soporte" items = {[ "Contacto", "Aviso legal", "Política de privacidad", "Términos y condiciones", "Mapa del sitio" ]} />
                {/* 3rd part */}
                <FooterSection title = "Otros servicios" items = {[ "Alquiler de autos", "Buscador de actividades", "Lista de tours", "Buscador de vuelos", "Agencias de viaje" ]} />
                {/* 4th part */}
                <div className = "">
                    <h1 className = "text-lg font-bold">
                        Contáctanos
                    </h1>
                    <FooterContact label = "Nuestro número de celular" value = "+51 987 654 321" />
                    <FooterContact label = "Nuestro correo" value = "example@gmail.com" />
                </div>
            </div>
            {/* Bottom section */}
            <div className = "mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                <p className = "text-center md:text-left">
                    Copyright © 2025 <a href = "https://github.com/carlozzsilva10" target = "_blank" rel = "noopener noreferrer" className = "font-semibold">carlozzsilva10</a>. Todos los derechos reservados.
                </p>
                <div className = "flex items-center space-x-4 mt-4 md:mt-0">
                    <span>Redes sociales:</span>
                    <Link href = "#" className = "text-gray-500 hover:text-gray-800">
                        <FaFacebook />
                    </Link>
                    <Link href = "#" className = "text-gray-500 hover:text-gray-800">
                        <FaTwitter />
                    </Link>
                    <Link href = "#" className = "text-gray-500 hover:text-gray-800">
                        <FaDribbble />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;
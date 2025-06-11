import React from "react";
import { FaCalendarWeek, FaMap, FaUserGroup } from "react-icons/fa6";

const SearchBox = () => {
    return (
        <div className = "bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[85%]">
            {/* 1st Search input */}
            <div className = "flex items-center space-x-6">
                <FaMap className = "w-6 h-6 text-blue-600" />
                <div className = "">
                    <p className = "text-lg font-medium mb-[0.2rem]">
                        Ubicación
                    </p>
                    <input type = "text" name = "location" id = "location" placeholder = "¿A dónde viajas?" className = "outline-none border-none placeholder:text-gray-800"/>
                </div>
            </div>
            {/* 2nd Search input */}
            <div className = "flex items-center space-x-6">
                <FaCalendarWeek className = "w-6 h-6 text-blue-600" />
                <div className = "">
                    <p className = "text-lg font-medium mb-[0.2rem]">
                        Fecha de salida
                    </p>
                    <input type = "date" name = "departureDate" id = "departureDate" className = "outline-none border-none placeholder:text-gray-800" />
                </div>
            </div>
            {/* 3rd Search input */}
            <div className = "flex items-center space-x-6">
                <FaCalendarWeek className = "w-6 h-6 text-blue-600" />
                <div className = "">
                    <p className = "text-lg font-medium mb-[0.2rem]">
                        Fecha de retorno
                    </p>
                    <input type = "date" name = "returnDate" id = "returnDate" className = "outline-none border-none placeholder:text-gray-800" />
                </div>
            </div>
            {/* 4th Search input */}
            <div className = "flex items-center space-x-6">
                <FaUserGroup className = "w-6 h-6 text-blue-600" />
                <div className = "">
                    <p className = "text-lg font-medium mb-[0.2rem]">
                        Huésped(es)
                    </p>
                    <p className = "text-base font-normal">
                        1 huésped 1 habitación
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SearchBox;
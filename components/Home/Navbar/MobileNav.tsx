import React from "react";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

    return (
        <div>
            {/* Overlay */}
            <div className = {`fixed ${ navOpen } inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
            {/* NavLinks */}
            <div className = {`fixed ${ navOpen } top-0 left-0 z-[1050] w-[80%] sm:w-[60%] h-full bg-rose-900 text-white flex flex-col justify-center space-y-6 transition-all duration-500 delay-300`}>
                {navLinks.map((link) => {
                    return (
                        <Link key = {link.id} href = {link.url}>
                            <p className = "text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                                {link.label}
                            </p>
                        </Link>
                    )
                })}
                {/* Close button */}
                <CgClose className = "absolute top-[2rem] right-[1.5rem] sm:w-8 sm:h-8 w-6 h-6" onClick = {closeNav} />
            </div>
        </div>
    )
}

export default MobileNav;
"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);
    const handNavShow = () => setShowNav(true);
    const handleCloseNav = () => setShowNav(false);

    return (
        <>
            <Nav openNav = { handNavShow } />
            <MobileNav showNav = { showNav } closeNav = { handleCloseNav } />
        </>
    )
}

export default ResponsiveNav;
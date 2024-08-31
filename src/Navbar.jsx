// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic from "../src/assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2">
          <img
            src={pic}
            className="h-20 object-contain rounded-full"
            alt="Logo"
          />
        </div>
        <div>
          {/* Desktop navbar */}
          <NavLinks />
          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>
      {/* Mobile navbar */}
      {menu && <MobileNav closeMenu={() => setMenu(false)} />}
    </div>
  );
}

export default Navbar;

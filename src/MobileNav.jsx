// MobileNav.js
import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  "Home",
  "About",
  "Products",
  "Services",
  "Techinfo",
  "Quality",
  "Contact",
];

function MobileNav({ closeMenu }) {
  return (
    <div className="bg-white">
      <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
        {navItems.map((text) => (
          <li
            className="hover:scale-105 duration-200 font-semibold cursor-pointer"
            key={text}
          >
            <Link to={text === "Home" ? "/" : `/${text.toLowerCase()}`}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileNav;

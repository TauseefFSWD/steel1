// NavLinks.js
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

function NavLinks() {
  return (
    <ul className="hidden md:flex space-x-4">
      {navItems.map((text) => (
        <li className="hover:scale-105 duration-200 cursor-pointer" key={text}>
          <Link to={text === "Home" ? "/" : `/${text.toLowerCase()}`}>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;

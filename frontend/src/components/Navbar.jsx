import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import image1 from "../assets/image1.png";
import { Menu, X } from "lucide-react";

// Create a context to share the menu state
export const MenuContext = React.createContext();

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <MenuContext.Provider value={isMenuOpen}>
      <div className="relative">
        <div className="flex justify-between items-center px-4 md:px-5 py-3 md:py-5">
          <div className="flex items-center gap-2 md:gap-3">
            <img src={image1} className="w-20 md:w-32 rounded-full" alt="Logo" />
            <h1 className="font-bold text-lg md:text-xl">Driver Drowsiness</h1>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-5 font-semibold text-lg md:text-xl">
              {["Home", "About", "Features", "Contact"].map((item) => (
                <li key={item}>
                  <HashLink
                    smooth
                    to={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                    className="relative text-black hover:text-gray-700 duration-300 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                  >
                    {item}
                  </HashLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <nav
            className={`fixed md:hidden top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-10 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="flex flex-col gap-4 pt-20 px-6">
              {["Home", "About", "Features", "Contact"].map((item) => (
                <li key={item}>
                  <HashLink
                    smooth
                    to={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                    className="text-lg font-semibold block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </HashLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </MenuContext.Provider>
  );
}

export default Navbar;  
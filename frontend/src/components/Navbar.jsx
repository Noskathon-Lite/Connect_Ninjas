import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import TryItNow from "./TryItNow";

export const MenuContext = React.createContext(false);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!isMenuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          // Scrolling down and not at the top
          setIsNavbarVisible(false);
        } else {
          // Scrolling up or at the top
          setIsNavbarVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMenuOpen]);

  return (
    <MenuContext.Provider value={isMenuOpen}>
      <div className="fixed w-full top-0 z-50">
        {/* Add overlay when menu is open */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" />
        )}

        {/* Navbar container with scroll behavior */}
        <div
          className={` bg-white/80 backdrop-blur-md border-b border-gray-100 transform transition-transform duration-300 ${
            isNavbarVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
            <div className="flex items-center gap-3 ">
              <img
                src={logo}
                className="w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] rounded-full object-cover border-2 border-blue-100 shadow-md cursor-pointer"
                alt="Logo"
              />
              <div>
                <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  Driver Drowsiness
                </h1>
                <p className="text-sm text-gray-600 hidden md:block">
                  Smart Safety System
                </p>
              </div>
            </div>

            {/* Mobile Menu Button - Only show Menu icon here */}
            {!isMenuOpen && (
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={toggleMenu}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
            )}

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex gap-8 font-medium items-center" >
                <li>
                  <TryItNow />
                </li>
                {[
                  { name: "Home", path: "/#" },
                  { name: "About", path: "#about" },
                  { name: "Features", path: "#features" },
                  { name: "Contact", path: "#contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <HashLink
                      smooth
                      to={item.path}
                      className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2"
                    >
                      {item.name}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation (Fixed position, unaffected by scroll) */}
        <nav
          className={`fixed md:hidden top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button inside the mobile menu */}
          <button
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          <div className="pt-16 px-6">
            <ul className="flex flex-col gap-4">
              <li>
                <TryItNow />
              </li>
              {[
                { name: "Home", path: "/#" },
                { name: "About", path: "#about" },
                { name: "Features", path: "#features" },
                { name: "Contact", path: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <HashLink
                    smooth
                    to={item.path}
                    className="block py-3 px-4 text-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Add padding to prevent content from going under navbar */}
      <div className="h-[72px] md:h-[84px]" />
    </MenuContext.Provider>
  );
}

export default Navbar;

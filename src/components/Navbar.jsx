import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setisMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Skills", path: "skills" },
    { link: "Projects", path: "projects" },
    { link: "About", path: "about" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <header className="shadow-md bg-gray-900 top-0 left-0 right-0 text-white sticky">
      <nav className={`py-4 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b duration-300" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8 md:gap-6 px-8">
          <div className="text-2xl font-semibold flex items-center space-x-1">
            <span className="text-2xl tracking-widest">Hassan</span>
            <span className="w-2 h-2 rounded-full bg-green-500 absolute xl:top-[36.5px] xl:left-[140px] lg:left-[140px] lg:top-[36.5px] md:left-[140px] md:top-[36.5px] left-[140px] top-[37px]"></span>
          </div>
          <ul className="md:flex space-x-12 hidden cursor-pointer">
            {navItems.map(({ link, path }) => (
              <ScrollLink
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-lg text-white hover:text-green-400 first:font-medium hover-underline hover-underline:hover"
                activeClass="active"
                activeStyle={{ color: '#10b981' }}
                onClick={closeMenu}
              >
                {link}
              </ScrollLink>
            ))}
          </ul>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none text-green-500 pt-2">
              {isMenuOpen ? <FaXmark className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <div className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-3/4 max-w-xs bg-gray-900 transition-transform transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} ease-in-out duration-300 md:hidden`}>
          <div className="flex flex-col space-y-4 m-2 rounded-lg px-4 mt-8 cursor-pointer">
            {navItems.map(({ link, path }) => (
              <ScrollLink
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-lg font-semibold text-white hover:text-green-500 text-center py-3"
                activeClass="active"
                activeStyle={{ color: 'green' }}
                onClick={closeMenu}
              >
                {link}
              </ScrollLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

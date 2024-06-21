import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
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
    { link: "Services", path: "slider" },
    { link: "Resume", path: "resume" },
    { link: "Experience", path: "experience" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <header className="shadow-md bg-gray-900 top-0 left-0 right-0 text-white sticky ">
      <nav className={`py-4 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b duration-300" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8 md:gap-6">
          <a href="" className="text-2xl font-semibold flex items-center space-x-1">
            <span className="text-2xl tracking-widest">Hassan</span>
            <span className="w-2 h-2 rounded-full bg-green-500 absolute xl:top-[39px] xl:left-[108px] lg:left-[108px] lg:top-[39px] md:left-[107px] md:top-[39px] left-[106px] top-[37px]"></span>
          </a>
          <ul className="md:flex space-x-12 hidden cursor-pointer">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-lg text-white hover:text-green-400 first:font-medium hover-underline hover-underline:hover"
              >
                {link}
              </Link>
            ))}
          </ul>
          <div className="space-x-12 hidden md:flex items-center">
            <button className="bg-green-500 border-2 border-none text-black hover:text-white tracking-widest font-medium h-10 w-28 text-2sm rounded-3xl pb-[1px] font-Tatillium">Hire Me</button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none text-green-500 pt-2">
              {isMenuOpen ? <FaXmark className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <div className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-3/4 max-w-xs bg-gray-900 transition-transform transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} ease-in-out duration-300 md:hidden`}>
          <div className="flex flex-col space-y-4 m-2 rounded-lg px-4 mt-8 cursor-pointer">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-lg font-semibold text-white hover:text-green-500 text-center py-3"
                onClick={closeMenu}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";

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
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="shadow-md font-Montserrat bg-gray-300 m-2 rounded-lg top-0 left-0 right-0 ">
      <nav className={`py-4 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b duration-300" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8 md:gap-6">
       
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-1"
          >
            <IoHomeOutline className='w-8 h-6 text-black-500'/>
            <span className="text-[#263238] sm:text-base ">Real Estate</span>
          </a>
        
          <ul className="md:flex space-x-12 hidden cursor-pointer">
            {navItems.map(({ link, path }) => 
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-gray900 first:font-medium "
              >{link}
              </Link> )}
          </ul>
         
          <div className="space-x-12 hidden md:flex items-center ">
            <button className=" bg-white border-2 border-none text-black hover:text-white hover:bg-black h-10 w-28 text-2sm rounded-3xl ">Sign up</button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none focus:text-gray-500 pt-2">
              {isMenuOpen ? (<FaXmark className="h-6 w-6 " />) : (<FaBars className="h-6 w-6 " />)}
            </button>
          </div>
        </div>

        <div className={`space-y-4 m-2 rounded-lg ab shadow-md px-4 mt-16 py-6 ease-in  bg-gray-300 cursor-pointer transition-all duration-300 ${isMenuOpen ? "block bg-gray-200 top-0 right-0 left-0  " : "hidden"}`}>
          {navItems.map(({ link, path }) => 
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-white hover:text-neutralDGrey first:font-medium text-center hover:text-black"
            >{link}
            </Link> )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

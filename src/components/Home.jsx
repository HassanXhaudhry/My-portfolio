import React from "react";
import { FiDownload } from "react-icons/fi";
import me from "../assets/me.png";
import { FaGithub, FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {

  const socials = [
    {icon: <FaGithub />, path: 'https://github.com/HassanXhaudhry'},
    {icon: <FaLinkedin />, path: 'https://linkedin.com/in/muhammad-hassan-2a9556188/'},
    {icon: <FaWhatsapp />, path: 'https://wa.me/923057416656'},
    {icon: <FaTwitter />, path: 'https://x.com/mr_hassaanch'}
  ];

  return (
    <div className="flex justify-center items-center max-w-screen-2xl mx-auto min-h-screen xl:h-screen bg-gray-900 text-white ">
      <div className="flex flex-col xl:gap-44 gap-10 xl:mt-0 mt-12 mb-20 xl:flex-row items-center justify-between ">
        <div className="text-center xl:text-left order-2 xl:order-none xl:mx-0 mx-4">
          <span className="text-lg sm:text-xl tracking-widest font-Anton">
            Frontend Developer
          </span>
          <h1 className="mb-6 text-2xl font-semibold sm:text-4xl">
            Hello I'm <br />
            <span className="text-green-500">Muhammad Hassan</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80 text-xs leading-loose font-Poppins">
            A passionate and hardworking developer with focuses on creating
            responsive and user friendly web applications and strong
            communication skills eager to work with a team in achieving company
            goals in a given time.
          </p>
          <div className="flex flex-col xl:flex-row justify-center gap-8 items-center">
            <div
              style={{
                borderWidth: "1.5px",
                borderStyle: "solid",
                borderColor: "#10b981",
              }}
              className="flex justify-center bg-transparent hover:bg-green-500 border-2 border-green-500 w-44 py-2 px-2 text-white tracking-widest font-medium text-2sm rounded-3xl"
            >
              <button className="uppercase flex items-center gap-2">
                <span className="">Download CV</span>
                <FiDownload className="text-xl" />
              </button>
            </div>
            <div className="flex gap-4 w-52 justify-center">
              {socials.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    style={{
                      borderWidth: "1.5px",
                      borderStyle: "solid",
                      borderColor: "#10b981",
                    }}
                    className="w-9 h-9 border-[1.5px] border-green-500 rounded-full flex justify-center items-center text-base hover:bg-green-500 hover:text-primary hover:transition-all duration-500"
                  >
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full h-full relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2, duration: 0.3, ease: "easeIn" },
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.3, ease: "easeOut" },
              }}
              className="absolute w-[278px] h-[278px] xl:w-[298px] xl:h-[298px] mix-blend-lighten"
            >
                <img src={me} alt="img" className="object-contain pt-4 pl-3" />
            </motion.div>
            <motion.svg className="w-[300px] xl:w-[320px] h-[300px] xl:h-[320px]"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns='http://www.w3.org/2000/svg'>
            <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#10b981"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0"}}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate:[120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}>

            </motion.circle>
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;

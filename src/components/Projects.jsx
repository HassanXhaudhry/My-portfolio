import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowUpRight } from "react-icons/go";
import { BsGithub } from "react-icons/bs";
import { Tooltip } from "flowbite-react";
import cowin from "../assets/cowin.jpg";
import cartzilla from "../assets/cartzilla.jpg";
import weather from "../assets/weather.jpg";
import todo from "../assets/todo.jpg";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const projects = [
  {
    num: "01",
    category: "Cowin",
    title: "Project 1",
    description:
      "Project at Mexasol, which includes attractive UI, light/dark theme, Login/Signup authentication/validation and much more",
    stack: [
      { name: "Javascript" },
      { name: "TailwindCSS" },
      { name: "FlowbiteReact" },
      { name: "Formik" },
      { name: "ReduxToolkit" },
    ],
    image: cowin,
    live: "https://cowinai.netlify.app/",
    github: "https://github.com/HassanXhaudhry/cowinai/",
  },
  {
    num: "02",
    category: "Ecommmerce Store",
    title: "Project 2",
    description:
      "Single page e-commerce platform which displays items and manages the state of adding, removing, increasing/decreasing amount of items and sub total.",
    stack: [
      { name: "Javascript" },
      { name: "TailwindCSS" },
      { name: "ReactBootstrap" },
      { name: "FlowbiteReact" },
      { name: "ReduxToolkit" },
    ],
    image: cartzilla,
    live: "https://cartzillaweb.netlify.app/",
    github: "https://github.com/HassanXhaudhry/Cartzilla/",
  },
  {
    num: "03",
    category: "Weather Webapp",
    title: "Project 3",
    description: "Weather web app using Visual-crossing-weather Rapid API ",
    stack: [{ name: "Javascript" }, { name: "TailwindCSS" }],
    image: weather,
    live: "https://weatherdegree.netlify.app/",
    github: "https://github.com/HassanXhaudhry/Weather-App/",
  },
  {
    num: "04",
    category: "Todo Webapp",
    title: "Project 4",
    description:
      "An attractive Todo web app having sweet alerts on adding, deleting and updating tasks.",
    stack: [{ name: "Javascript" }, { name: "StyledComponents" }],
    image: todo,
    live: "https://todoitman.netlify.app/",
    github: "https://github.com/HassanXhaudhry/Todo-app/",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <section id="projects">
      <div className="max-w-screen-2xl mx-auto bg-gray-900 text-white">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="flex flex-col justify-center py-2 xl:px-0"
        >
          <div className="flex flex-col xl:flex-row xl:gap-24 gap-16 xl:mx-28 mx-6 mb-16">
            <div className="w-full xl:w-[50%] xl:h-[360px] flex flex-col xl:justify-center order-first xl:order-none items-center">
              <div className="flex flex-col gap-5 h-[50%] xl:mb-24 mb-2">
                <div
                  style={{
                    backgroundColor: "transparent",
                    textShadow: `-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff`,
                  }}
                  className="text-8xl leading-none font-bold text-gray-900"
                >
                  {project.num}
                </div>
                <p className="text-[42px] font-bold leading-none group-hover:text-green-500 transition-all duration-500 capitalize">
                  {project.category}
                </p>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex flex-col md:flex-row md:space-x-2">
                  {project.stack.map((item, index) => (
                    <p key={index} className="text-md text-green-500">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </p>
                  ))}
                </div>

                <hr
                  style={{
                    borderWidth: "0.5px",
                    borderStyle: "solid",
                    borderColor: "#9CA3AF",
                  }}
                />
                <div className="flex items-center gap-6">
                  <div className="w-[40px] h-[40px] bg-gray-600 hover:bg-green-500 flex justify-center items-center rounded-full">
                    <Tooltip
                      content="Live Project"
                      placement="bottom"
                      style="light"
                      className="w-24 text-xs text-center"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GoArrowUpRight className="text-xl" />
                      </a>
                    </Tooltip>
                  </div>
                  <div className="w-[40px] h-[40px] bg-gray-600 hover:bg-green-500 flex justify-center items-center rounded-full">
                    <Tooltip
                      content="Git Repository"
                      placement="bottom"
                      style="light"
                      className="w-28 text-xs text-center"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub className="text-xl" />
                      </a>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full xl:w-1/2 px-4">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="rounded-lg shadow-lg"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="relative h-[400px] group overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.category}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <h3 className="text-white text-2xl font-bold">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                <div className="absolute top-48 left-[-10px] right-[-10px] z-10 flex justify-between">
                  <MdOutlineKeyboardArrowLeft className="swiper-button-prev rounded-r-sm shadow-md text-black bg-green-400 transition-colors duration-200" />
                  <MdOutlineKeyboardArrowRight className="swiper-button-next rounded-l-sm shadow-md text-black bg-green-400 transition-colors duration-200" />
                </div>
              </Swiper>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Projects;

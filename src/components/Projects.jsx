import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowUpRight } from "react-icons/go";
import { BsGithub } from "react-icons/bs";
import cowin from "../assets/cowin.png";
import deals4trip from "../assets/deals4trip.png";
import cartzilla from "../assets/cartzilla.jpg";
import weather from "../assets/weather.jpg";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const projects = [
  {
    num: "1",
    category: "Deals4Trip",
    title: "Project 1",
    description:
      "Developed a dynamic project at Trixly featuring an eye-catching UI, language translation, secure login/signup with validation, AI-powered chat, and more innovative features.",
    stack: [
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "FlowbiteReact" },
      { name: "MUI" },
      { name: "ReduxToolkit" },
      { name: "i18Next" },
      { name: "TailwindCSS" },
      { name: "FlowbiteReact" },
      { name: "Framer motion" },
      { name: "Axios" },
      { name: "Formik/Yup" },
    ],
    image: deals4trip,
    live: "https://deals4trip.netlify.app/",
    github: "https://github.com/HassanXhaudhry/Deals4Trip.git",
  },
  {
    num: "2",
    category: "Cowin AI",
    title: "Project 2",
    description:
      "Built an exciting project at Mexasol with a sleek UI, light/dark mode toggle, secure login/signup with validation, and many more features to enhance user experience.",
    stack: [
      { name: "React" },
      { name: "Bootstrap" },
      { name: "FlowbiteReact" },
      { name: "Ant Design" },
      { name: "ReduxToolkit" },
      { name: "Framer motion" },
    ],
    image: cowin,
    live: "https://www.cowin.ai/",
    github: "https://github.com/HassanXhaudhry/cowinai.git",
  },
  {
    num: "3",
    category: "E-commerce Store",
    title: "Project 3",
    description:
      "Built a sleek single-page e-commerce platform with light/dark mode, dynamic cart management, and real-time subtotal updates for a seamless user experience.",
    stack: [
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "FlowbiteReact" },
      { name: "Styled Components" },
      { name: "ReduxToolkit" },
      { name: "TailwindCSS" },
      { name: "FlowbiteReact" },
      { name: "Framer motion" },
      { name: "Axios" },
      { name: "Formik/Yup" },
    ],
    image: cartzilla,
    live: "https://cartzillaweb.netlify.app/",
    github: "https://github.com/HassanXhaudhry/Cartzilla.git",
  },
  {
    num: "4",
    category: "Weather App",
    title: "Project 4",
    description:
      "Created a cool weather web app that shows temperature, wind speed, and humidity for every day of the week, along with a search feature to explore forecasts for any city.",
    stack: [
      { name: "Visual-crossing weather rapid API" },
      { name: "TailwindCSS" },
      { name: "Axios" },
    ],
    image: weather,
    live: "https://weatherdegree.netlify.app/",
    github: "https://github.com/HassanXhaudhry/Weather-App.git",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <section id="projects" className="bg-gray-900 text-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-10">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
          }}
        >
          <div className="flex flex-col xl:flex-row gap-12 items-center">
            <div className="w-full xl:w-1/2">
              <div className="flex flex-col gap-6">
                <h1 className="text-6xl md:text-7xl font-bold text-gray-500">
                  {project.num}
                </h1>
                <h2 className="text-3xl font-bold capitalize">
                  {project.category}
                </h2>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item, index) => (
                    <span
                      key={index}
                      className="text-sm bg-gray-700 text-green-400 px-2 py-1 rounded-md"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex justify-center items-center bg-gray-700 hover:bg-green-500 rounded-full"
                  >
                    <GoArrowUpRight className="text-xl" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex justify-center items-center bg-gray-700 hover:bg-green-500 rounded-full"
                  >
                    <BsGithub className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full xl:w-1/2">
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

                <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 z-50 flex justify-between px-4">
                  <button className="swiper-button-prev text-white cursor-pointer">
                    <MdOutlineKeyboardArrowLeft className="w-4 h-4" />
                  </button>
                  <button className="swiper-button-next text-white cursor-pointer">
                    <MdOutlineKeyboardArrowRight className="w-4 h-4" />
                  </button>
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

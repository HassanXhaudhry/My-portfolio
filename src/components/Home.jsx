import { useRef } from "react";
import { FiDownload } from "react-icons/fi";
import me from "../assets/me.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const Home = () => {
  const socials = [
    { icon: <FaGithub />, path: "https://github.com/HassanXhaudhry" },
    {
      icon: <FaLinkedin />,
      path: "https://linkedin.com/in/muhammad-hassan-2a9556188/",
    },
    { icon: <FaWhatsapp />, path: "https://wa.me/923057416656" },
  ];

  const stats = [
    { num: 2, text: "Years of experience" },
    { num: 15, text: "Projects completed" },
    { num: 10, text: "Technologies mastered" },
    { num: 99, text: "Code Commits" },
  ];

  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="home">
      <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto min-h-screen xl:h-screen bg-gray-900 text-white">
        <motion.div
          ref={contentRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col xl:gap-44 gap-10 xl:mt-[-50px] mt-12 mb-16 xl:flex-row items-center justify-between"
        >
          <motion.div
            className="text-center xl:text-left order-2 xl:order-none xl:mx-0 mx-4"
            variants={itemVariants}
          >
            <motion.span
              className="xl:text-lg text-md tracking-widest font-Poppins"
              variants={itemVariants}
            >
              React JS Frontend Developer
            </motion.span>
            <motion.h1
              className="my-4 text-3xl font-semibold xl:text-4xl"
              variants={itemVariants}
            >
              Hello I'm <br />
              <span className="text-green-500 font-Inconsolata">
                Muhammad Hassan
              </span>
            </motion.h1>
            <motion.p
              className="max-w-[500px] mb-9 text-white/80 text-xs leading-loose font-Poppins"
              variants={itemVariants}
            >
              A passionate and hardworking developer with focuses on creating
              responsive and user friendly web applications and strong
              communication skills eager to work with a team in achieving
              company goals in a given time.
            </motion.p>
            <motion.div
              className="flex flex-col xl:flex-row justify-center gap-8 items-center"
              variants={containerVariants}
            >
              <motion.div
                style={{
                  borderWidth: "1.5px",
                  borderStyle: "solid",
                  borderColor: "#10b981",
                }}
                className="flex justify-center bg-transparent hover:bg-green-500 border-2 border-green-500 w-48 py-2 px-2 text-white tracking-widest font-medium text-2sm rounded-3xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <button className="uppercase flex items-center gap-2">
                  <a
                    href="https://drive.google.com/file/d/1YdFOOVUocn7OOt4LnyJh4ltiQuXUZVqo/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                  <FiDownload className="text-xl" />
                </button>
              </motion.div>

              <motion.div
                className="flex gap-4 w-52 justify-center"
                variants={containerVariants}
              >
                {socials.map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Link
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
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full h-full relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1, ease: "easeIn" },
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.5, ease: "easeOut" },
                }}
                className="absolute w-[278px] h-[278px] xl:w-[298px] xl:h-[280px] mix-blend-lighten"
              >
                {me && (
                  <img
                    src={me}
                    alt="Muhammad Hassan"
                    className="object-contain pt-2 pl-3 w-full h-full"
                  />
                )}
              </motion.div>
              <motion.svg
                className="w-[300px] xl:w-[320px] h-[300px] xl:h-[320px]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.circle
                  cx="253"
                  cy="253"
                  r="250"
                  stroke="#10b981"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{
                    strokeDasharray: [
                      "15 120 25 25",
                      "16 25 92 72",
                      "4 250 22 22",
                    ],
                    rotate: [120, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                ></motion.circle>
              </motion.svg>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto my-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-wrap gap-8 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                className="flex-1 flex gap-1 items-center justify-center xl:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-2xl xl:text-4xl font-bold"
                />
                <span className="text-2xl xl:text-3xl font-bold pt-1">+</span>
                &nbsp;
                <p
                  className={`${
                    item.text.length < 15
                      ? "max-w-[80px] text-sm"
                      : "max-w-[150px] text-sm"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedSection = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-8 text-green-400 font-Inconsolata">About Me</h1>
        </AnimatedSection>
        <div className="">
        <div className="flex flex-col md:flex-row justify-between xl:gap-[470px] lg:gap-[450px] md:gap-[300px] sm:[300px] xs:gap-[250px] xl:pl-16 lg:pl-12 md:pl-10 sm:pl-10 xs:pl-8">
          <AnimatedSection className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl xl:text-3xl tracking-widest font-bold font-Poppins text-green-500 mb-4">
              Education
            </h2>
            <div className="mb-6">
              <p className="font-semibold text-gray-200 font-Montserrat text-sm">BACHELOR IN COMPUTER SCIENCE</p>
              <p className="text-[12px] text-gray-400 font-Manrope">PMAS Arid Agriculture University, Rawalpindi</p>
              <p className="text-xs font-Roboto text-gray-400">2018 - 2022</p>
            </div>
            <div>
              <p className="font-semibold text-gray-200 font-Montserrat text-sm">TECHLIFT, MERN STACK BOOTCAMP</p>
              <p className="text-[12px] text-gray-400 font-Manrope">PNY Trainings, Lahore</p>
              <p className="text-xs font-Roboto text-gray-400">Jan 2023 – Mar 2023</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="w-full md:w-1/2">
            <h2 className="text-2xl xl:text-3xl tracking-widest font-bold font-Poppins text-green-500 mb-4">
              Experience
            </h2>
            <div className="mb-6">
              <p className="font-semibold text-gray-200 font-Montserrat text-sm">REACT JS DEVELOPER INTERN</p>
              <p className="text-[12px] text-gray-400 font-Manrope">Craftooo, Lahore</p>
              <p className="text-xs font-Roboto text-gray-400">Oct 2023 – Dec 2023</p>
            </div>
            <div>
              <p className="font-semibold text-gray-200 font-Montserrat text-sm">REACT JS DEVELOPER</p>
              <p className="text-[12px] text-gray-400 font-Manrope">Mexasol, Lahore</p>
              <p className="text-xs font-Roboto text-gray-400">Jan 2024 – May 2024</p>
            </div>
          </AnimatedSection>
        </div>
      </div>    
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs, FaHtml5, FaCss3, FaBootstrap, FaFigma, FaGitAlt } from 'react-icons/fa6';
import { TbBrandVite, TbBrandRedux } from 'react-icons/tb';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { DiJqueryLogo } from 'react-icons/di';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { motion } from 'framer-motion';

const icons = [
  { Component: RiReactjsLine, color: '#22d3ee' },
  { Component: FaNodeJs, color: '#66b556' },
  { Component: FaHtml5, color: '#ef623f' },
  { Component: FaCss3, color: '#356eff' },
  { Component: TbBrandVite, color: '#e68c43' },
  { Component: FaBootstrap, color: '#6b35ff' },
  { Component: BiLogoTailwindCss, color: '#29dfab' },
  { Component: AiOutlineAntDesign, color: '#35bcff' },
  { Component: FaFigma, color: '#ff35e4' },
  { Component: DiJqueryLogo, color: '#2c45d4' },
  { Component: FaGitAlt, color: '#ce4229' },
  { Component: TbBrandRedux, color: '#7a20ce' }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto bg-gray-900 text-white py-16">
        <p className="text-3xl xl:text-4xl tracking-widest font-bold font-Inconsolata text-green-400">SKILLS</p>
        <div className="grid gap-6 gap-x-10 my-20 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {icons.map(({ Component, color }, index) => (
            <motion.div
              key={index}
              style={{ borderWidth: "3px", borderStyle: "solid", borderColor: "#6B7280" }}
              className="rounded-3xl p-3"
              animate={{ y: [0, -7.5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2 + index * 0.1, 
                delay: index * 0.2, 
                ease: "easeInOut"
              }}
            >
              <Component className={`text-6xl`} style={{ color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

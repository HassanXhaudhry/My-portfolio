import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedInput = ({ className, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.input
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={className}
      {...props}
    />
  );
};

const AnimatedTextArea = ({ className, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.textarea
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={className}
      {...props}
    />
  );
};

const ContactUs = () => {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.2 });

  return (
    <section id="contact">
      <div className='flex flex-col justify-center items-center mx-auto bg-gray-900 text-white py-10 pb-6'>
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <form className="flex flex-col gap-6 p-10 bg-gray-700 w-full items-center">
            <motion.h3 
              className="text-2xl xl:text-3xl tracking-widest font-bold font-Inconsolata text-green-400"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's work together
            </motion.h3>
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col lg:flex-row gap-6">
                <AnimatedInput type="text" required placeholder="First Name" className="bg-gray-800 w-full lg:w-1/2 focus:ring-0 focus:border-current rounded-md px-3 py-2" />
                <AnimatedInput type="text" required placeholder="Last Name" className="bg-gray-800 w-full lg:w-1/2 focus:ring-0 focus:border-current rounded-md px-3 py-2" />
              </div>
              <div className="flex flex-col lg:flex-row gap-6">  
                <AnimatedInput type="email" required placeholder="Email address" className="bg-gray-800 w-full lg:w-1/2 focus:ring-0 focus:border-current rounded-md px-3 py-2" />
                <AnimatedInput type="text" required placeholder="Phone number" className="bg-gray-800 w-full lg:w-1/2 focus:ring-0 focus:border-current rounded-md px-3 py-2" />
              </div>  
              <AnimatedTextArea
                required
                placeholder="Type your message here"
                className="bg-gray-800 w-full focus:ring-0 focus:border-current h-[90px] text-start align-top rounded-md px-3 py-2"
              />
            </div>
            <motion.div
              style={{
                borderWidth: "1.5px",
                borderStyle: "solid",
                borderColor: "#10b981",
              }}
              className="flex justify-center bg-transparent hover:bg-green-500 border-2 border-green-500 w-44 py-2 px-2 text-white tracking-widest font-medium text-2sm rounded-3xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="uppercase flex items-center gap-2">
                <span>Send message</span>
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactUs;
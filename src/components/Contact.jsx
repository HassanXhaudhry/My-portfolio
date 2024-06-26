import { motion } from "framer-motion";
import React from 'react'

const ContactUs = () => {
  return (
    <section id="contact">
    
    <div className='flex flex-col justify-center items-center max-w-screen-2xl mx-auto bg-gray-900 text-white py-4'>
    <motion.section
    initial={{opacity: 0}}
    animate={{opacity:1,
    transition:{delay: 2.4, duration: 0.4, ease:"easeIn"},
    }}>
    <div className="">
    <form className="flex flex-col gap-6 p-10 bg-gray-700 rounded-xl">
      <h3 className="text-4xl text-green-500">Let's work together</h3>
      <p className="text-gray-400">Lorem ipsum dolor sit amet.</p>
      <div className="flex flex-col gap-6">
        <input type="text" required placeholder="First Name"/>
        <input type="text" required placeholder="Last Name"/>
        <input type="email" required placeholder="Email address"/>
        <input type="text" required placeholder="Phone number"/>
          <input type="text" required placeholder="Type your message here" className="h-[100px]"/>
      </div>
      <div
                style={{
                  borderWidth: "1.5px",
                  borderStyle: "solid",
                  borderColor: "#10b981",
                }}
                className="flex justify-center bg-transparent hover:bg-green-500 border-2 border-green-500 w-44 py-2 px-2 text-white tracking-widest font-medium text-2sm rounded-3xl"
              >
                <button className="uppercase flex items-center gap-2">
                  <span className="">Send message</span>
                </button>
              </div>
    </form>

    </div>
      
    </motion.section>
    </div>
    </section>  
  )
}

export default ContactUs

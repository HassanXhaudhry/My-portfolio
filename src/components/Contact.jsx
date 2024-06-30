import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact">
      <div className='flex flex-col justify-center items-center mx-auto bg-gray-900 text-white py-6 pb-6'><div>
  <form className="flex flex-col gap-6 p-10 bg-gray-700 rounded-xl w-full">
    <h3 className="text-4xl text-green-500">Let's work together</h3>
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col lg:flex-row gap-6">
        <input type="text" required placeholder="First Name" className="bg-gray-800 w-full lg:w-1/2 focus:ring-0 focus:border-current rounded-md px-3 py-2" />
        <input type="text" required placeholder="Last Name" className="bg-gray-800 w-full lg:w-1/2 focus:ring-0 focus:border-current rounded-md px-3 py-2" />
      </div>
      <div className="flex flex-col lg:flex-row gap-6">  
        <input type="email" required placeholder="Email address" className="bg-gray-800 w-full lg:w-1/2 focus:ring-0 focus:border-current rounded-md px-3 py-2" />
        <input type="text" required placeholder="Phone number" className="bg-gray-800 w-full lg:w-1/2 focus:ring-0 focus:border-current rounded-md px-3 py-2" />
      </div>  
      <textarea
        required
        placeholder="Type your message here"
        className="bg-gray-800 w-full focus:ring-0 focus:border-current h-[90px] text-start align-top rounded-md px-3 py-2"
      />
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
        <span>Send message</span>
      </button>
    </div>
  </form>
</div>
      </div>
    </section>
  );
}

export default ContactUs;
import React from 'react'

function page() {
  return (
    <div className="hero bg-[#212429] min-h-screen text-white">
    <div className="hero-content text-center">
      <div className="w-md">
        <h1 className="text-5xl font-bold mt-20 md:mt-5">What I Do</h1>
<div className=' w-full flex flex-col md:flex-row gap-10 mt-10 p-7'>
<div className="card card-side bg-base-100 shadow-xl border-2 border-red-400">
  <div className="card-body">
    <h2 className="card-title text-left text-red-500 text-2xl">WEB DEVELOPMENT</h2>
    <p className=' text-left'> I specialize in building dynamic, responsive, and scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js.
         With expertise in these modern technologies, I deliver fast, SEO-friendly, and high-performance solutions tailored to your needs. Whether you require a sleek,
          single-page application or a full-fledged web platform, I ensure optimal user experience, seamless functionality, and secure backend systems. My approach focuses on clean code, 
        agile development, and continuous improvement to bring your ideas to life efficiently and effectively.</p>
  </div>
</div>
<div className="card card-side bg-base-100 shadow-xl border-2 border-red-400">
  <div className="card-body">
    <h2 className="card-title text-left text-red-500 text-2xl">APP DEVELOPMENT</h2>
    <p className=' text-left'>I offer comprehensive app development services, specializing in React Native and the MERN stack (MongoDB, Express.js, React, Node.js) to create cross-platform mobile applications with robust functionality and exceptional performance. With React Native, I develop apps that run smoothly on both iOS and Android, providing a native-like experience with a single codebase. This not only speeds up the development process but also ensures cost-effectiveness without compromising on quality or performance.By integrating React Native with the MERN stack, I bring your ideas to life through custom app development</p>
  </div>
</div>

</div>
      </div>
    </div>
  </div>
  )
}

export default page
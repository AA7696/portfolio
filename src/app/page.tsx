'use client'
import React from 'react'
import bg from '../assets/images/bg-my.png'
import Typewriter from 'typewriter-effect'; 
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

function Home() {
  return (
    <>
    <div className="home-container">
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${bg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",

  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center mt-40">
    <div className=" max-w-xl">
      <h1 className="mb-3 text-6xl font-bold text-white font-mono">I Am Aachman Agarwal</h1>
      <div className=' text-2xl text-red-400'>
      <Typewriter
        options={{
          strings: ['Full Stack Developer'],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}

      />
      <div className="logo text-white flex gap-4 text-3xl items-center w-full justify-center mt-4">
        <DiMongodb />
        <SiExpress />
        <FaReact />
        <FaNodeJs />
      </div>
      <div className="logo text-white flex gap-4 text-3xl items-center w-full justify-center mt-4">
        <RiNextjsFill />
        <FaFigma />
        <FaGitAlt />
        
      </div>

      </div>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default Home
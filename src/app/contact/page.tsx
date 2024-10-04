import Image from 'next/image'
import React from 'react'
import me from '@/assets/images/me-photo.png'
import dynamic from 'next/dynamic'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Link from 'next/link';
import Form from '@/components/Form';

function page() {

  return (
    <div className="hero min-h-screen w-full text-white bg-black">
  <div className="hero-content flex-col lg:flex-row w-[97%] h-full">
    <div className="card bg-[#212429]  w-full shrink-0 shadow-2xl flex-col md:flex-row min-h-full justify-center items-center">
        <div className=' w-full md:w-[50%] flex flex-col justify-center items-center gap-6 mt-20 md:mt-30'>
            
            <Image src={me.src} alt={''} 
            width={300} height={300} 
            className=' rounded-3xl shadow-lg  object-cover' 
            
             /> 
            <div className='btn btn-error text-white' >
                <a href='/assets/achman-resume.pdf' download >Download Resume</a>
            </div>
 <nav className="flex flex-row gap-4 md:place-self-center md:justify-self-end">
    <Link href='https://x.com/AgarwalAachman?t=i8hJtvPs14NqFd5We787OA&s=09'>
    <FaTwitter 
    className="text-2xl text-white"
    />
    </Link>
    <Link href='https://www.linkedin.com/in/aachman-agarwal-1a434b19a/'>
    <FaLinkedin 
    className="text-2xl text-white"
    />
    </Link>
    <Link href='https://github.com/AA7696'>
    <FaGithub  
    className="text-2xl text-white"
    />
    </Link>
    <Link href='https://www.instagram.com/achmanagarwal7696/'>
    <FaInstagram
    className="text-2xl text-white"
    />
    </Link>
  </nav>     
        </div>
        <Form />   

    </div>
  </div>
</div>
  )
}

export default dynamic (() => Promise.resolve(page),{ssr:false})

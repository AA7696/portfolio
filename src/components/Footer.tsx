import Link from 'next/link'
import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer bg-black text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
    <p>Aachman Agarwal</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
</footer>
  )
}

export default Footer
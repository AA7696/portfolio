import Link from 'next/link';
import React from 'react'

type Project = {
    name: string;
    imgUrl: string;
    desc: string;
    projUrl: string;
  };

function ProjectCard({name,imgUrl,desc,projUrl}: Project) {
  return (
    <div className="card bg-base-400 w-72 shadow-xl hover:scale-110 ">
  <figure>
    <img
      src={imgUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-left">
      {name}
    </h2>
    <p className=' text-left'>{desc}</p>
    <Link href={projUrl} className=' bg-red-400 rounded-lg'>Github</Link>
  </div>
</div>
  )
}

export default ProjectCard
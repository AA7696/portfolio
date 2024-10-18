import ProjectCard from '@/components/ProjectCard'
import React from 'react'

const project = [
    {
        id: 1,
        name: 'Scientific & GST Calculator',
        imgUrl: 'https://i.ytimg.com/vi/CNKcBz21Lr8/maxresdefault.jpg',
        desc: 'The Scientific and GST Calculator is a React Native application that allows users to perform both basic and advanced mathematical calculations.',
        projUrl: 'https://github.com/AA7696/Calculator'
    },
    {
        id: 2,
        name: 'Furniture Store',
        imgUrl: 'https://th.bing.com/th/id/OIP.Bo-YCBHT2Dc4ZBXpWNXNXQHaDt?rs=1&pid=ImgDetMain',
        desc:'Developed an e-commerce application for a furniture store using React Native for the front-end and the MERN  stack for the back-end.  It features user authentication, product search, and dynamic pricing updates.',
        projUrl: 'https://github.com/AA7696/Furniture-Store'
    },
    {
        id:3,
        name: 'Book Store',
        imgUrl: 'https://i.ytimg.com/vi/jyFYqom2sxI/maxresdefault.jpg',
        desc: 'Developed a book store application using MERN STACK. It is a simple CRUD Application',
        projUrl: 'https://github.com/AA7696/Book-Store'
    },
    {
        id: 4,
        name: 'Portfolio',
        imgUrl: 'https://studyadv.s3.amazonaws.com/production/blogs/images/000/000/635/original/maxresdefault.jpg',
        desc:'Created a modern and responsive portfolio website using Next.js, showcasing personal projects, skills, and achievements. ',
        projUrl: 'https://github.com/AA7696/portfolio'
    }
]


function page() {
  return (
    <div className="hero bg-[#212429] min-h-screen w-full text-white">
  <div className="hero-content text-center mt-20 md:mt-10 w-full">
    <div className="w-full md:p-12">
      <h1 className=" text-white text-3xl md:text-5xl font-bold md:mt-9">My Projects</h1>
      <div className="project mt-8 flex flex-col md:flex-row flex-wrap w-full justify-evenly p-8 gap-9">
        {project.map((item) => {
            return (
                <ProjectCard key={item.id} name={item.name} imgUrl={item.imgUrl} desc={item.desc} projUrl={item.projUrl}  />
            )
        })}

      </div>
    </div>
  </div>
</div>
  )
}

export default page
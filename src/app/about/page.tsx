// Page.tsx
import Tabs from '@/components/Tabs';

function Page() {

  return (
    <div className="hero bg-[#212429] min-h-screen text-white">
      <div className="hero-content md:text-center flex-col md:w-[80%] sm:w-full p-5 mt-32">
        <p className="text-sm md:text-lg font-light mt-5 w-3/4">
          I hold a B-Tech in Computer Science and am pursuing my passion as a Full Stack Web Developer. With a focus on creating modern, efficient web solutions using the MERN stack, I’m also deeply interested in cloud computing and its potential to enhance scalability and user experiences.

          Beyond tech, I enjoy public speaking and have experience managing events, blending leadership and communication skills with my technical expertise. I'm always eager to learn, grow, and stay ahead in the fast-evolving tech landscape.
        </p>
        <h1 className="text-xl md:text-5xl font-bold text-red-400 mt-8">MY RESUME</h1>
        <Tabs />
      </div>
    </div>
  );
}

export default Page;
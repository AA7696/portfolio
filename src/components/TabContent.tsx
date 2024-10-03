// TabContent.tsx
import React from 'react';

interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const skills = (
    <div className="w-full flex items-center justify-center">
      <div className="flex w-[95%] flex-col lg:flex-row">
  <div className="card bg-base-300 rounded-box grid min-h-32 flex-grow p-8 gap-7 justify-start items-start">
    <div className=" w-full flex justify-start items-start flex-col gap-5">
    <h2 className="text-lg font-bold">React Js</h2>
  <progress className="progress progress-error w-56" value="70" max="100"></progress>
    </div>
    <div className=" w-full flex justify-start items-start flex-col gap-5">
    <h2 className="text-lg font-bold">Next Js</h2>
  <progress className="progress progress-error w-56" value="60" max="100"></progress>
    </div>
    <div className=" w-full flex justify-start items-start flex-col gap-5">
    <h2 className="text-lg font-bold">React Native</h2>
  <progress className="progress progress-error w-56" value="70" max="100"></progress>
    </div>
    <div className=' w-full flex justify-start items-start flex-col gap-5'>
    <h2 className="text-lg font-bold">Figma</h2>
  <progress className="progress progress-error w-56" value="40" max="100"></progress>
    </div>

  </div>
  <div className="divider lg:divider-horizontal"></div>
  <div className="card bg-base-300 rounded-box grid min-h-32 flex-grow p-8 gap-7 justify-start items-start">
  <div className=' w-full flex justify-start items-start flex-col gap-5'>
    <h2 className="text-lg font-bold">Node Js</h2>
  <progress className="progress progress-error w-56" value="70" max="100"></progress>
    </div>
    <div className=' w-full flex justify-start items-start flex-col gap-5'>
    <h2 className="text-lg font-bold">Express Js</h2>
  <progress className="progress progress-error w-56" value="60" max="100"></progress>
    </div>
    <div className=' w-full flex justify-start items-start flex-col gap-5'>
    <h2 className="text-lg font-bold">Mongo DB</h2>
  <progress className="progress progress-error w-56" value="50" max="100"></progress>
    </div>
    <div className=' w-full flex justify-start items-start flex-col gap-5'>
    <h2 className="text-lg font-bold">Git & Git Hub</h2>
  <progress className="progress progress-error w-56" value="40" max="100"></progress>
    </div>


  </div>
</div>
    </div>
  );

  const education = (
    <div  className=' w-full'>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">2022</time>
      <div className="text-lg font-black">Dehradun Institute Of Technology</div>
      I am currently pursuing a Bachelor of Technology (BTech CSE) degree at DIT University, Dehradun, with an expected graduation in 2026, and I am focused on developing expertise in Full Stack Development and Devops.
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">2017</time>
      <div className="text-lg font-black">Delhi Public School, Meerut</div>
      I completed my high school education at Delhi Public School, Meerut, where I developed a strong foundation in 
      science and mathematics. My experience at DPS Meerut helped shape my analytical skills 
      and fostered a passion for technology,
       which I am now pursuing through my BTech degree
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">2009</time>
      <div className="text-lg font-black">International Public School, Meerut</div>
      I completed my 1st to 8th grade at International Public School, Meerut, where I developed a strong academic foundation.
       My time there fostered my early interest in science and technology, 
      setting the stage for my continued academic journey
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">2005</time>
      <div className="text-lg font-black">Spring Dales, Meerut</div>
      I completed my primary education at Spring Dales, where I first developed essential skills in academics and learning. 
      This early foundation played a crucial role 
      in shaping my curiosity and passion for continuous learning
    </div>
    <hr />
  </li>
</ul>
    </div>
  );

  const achievements = (
    <div className='w-full flex flex-col md:flex-row   gap-7'>
            <div className="card card-side bg-base-100 shadow-xl border-2 border-red-400">
  <div className="card-body">
    <h2 className="card-title items-start">Selected As  PR Head</h2>
    <p className=' text-left'>Selected as the PR Head of the ACM DITU Student Chapter, demonstrating leadership skills and the ability to effectively manage communications and outreach initiatives</p>
  </div>
</div>
<div className="card card-side bg-base-100 shadow-xl border-2 border-red-400">
  <div className="card-body">
    <h2 className="card-title items-start">Academic CGPA</h2>
    <p className=' text-left'>"Achieved a CGPA of 9 in college, reflecting a strong commitment to academic excellence and a deep understanding of core subjects in my field</p>
  </div>
</div>


    </div>
  );

  const experience = (
    <div className=' flex flex-col md:flex-row gap-6 w-full  '>
      <div className="card card-side bg-base-100 shadow-xl border-2 border-red-400">
  <div className="card-body">
    <h2 className="card-title items-start">PR Head, DITU ACM Student Chapter</h2>
    <p className=' text-left'>As the PR Head of the DIT University ACM Student Chapter, I manage communications and public relations initiatives 
      to promote the chapter's activities and events. My responsibilities include crafting engaging content for social media
       platforms, developing promotional materials, and fostering relationships with university stakeholders. Through strategic outreach, I aim to enhance visibility and encourage participation in tech-related programs,
       contributing to a dynamic learning environment.</p>
  </div>
</div>
<div className="card card-side bg-base-100 shadow-xl border-2 border-red-400">
  <div className="card-body">
    <h2 className="card-title text-left">Member Of Technical Team of Youthopia 2023</h2>
    <p className=' text-left'>As a member of the web development team for Yuthopia 2023, the technical and cultural fest 
      of DIT University, I collaborated with fellow team members to design and develop the event's official website.
       My contributions included creating user-friendly interfaces and implementing features to enhance attendee engagement.
        This experience allowed me to apply my technical skills while working in a dynamic environment to support a
       successful and well-attended event.</p>
  </div>
</div>


    </div>
  );

  switch (activeTab) {
    case 'skills':
      return skills;
    case 'education':
      return education;
    case 'achievements':
      return achievements;
    case 'experience':
      return experience;
    default:
      return <div></div>;
  }
};

export default TabContent;
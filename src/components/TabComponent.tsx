// TabComponent.tsx
import React from 'react';

interface TabProps {
  activeTab: string;
  handleTabChange: (tab: string) => void;
}

const TabComponent: React.FC<TabProps> = ({ activeTab, handleTabChange }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center mb-10 rounded-md bg-slate-600 w-[80%] ">
      <button
        className={`mr-5 py-2 px-4 rounded-lg w-full ${
          activeTab === 'skills' ? 'bg-red-400 text-white' : ' bg-transparent text-white'
        }`}
        onClick={() => handleTabChange('skills')}
      >
        Skills
      </button>
      <button
        className={`mr-5 py-2 px-4 rounded-lg w-full ${
          activeTab === 'education' ? 'bg-red-400 text-white' : 'bg-transparent text-white'
        }`}
        onClick={() => handleTabChange('education')}
      >
        Education
      </button>
      <button
        className={`mr-5 py-2 px-4 rounded-lg w-full ${
          activeTab === 'achievements' ? 'bg-red-400 text-white' : 'bg-transparent text-white'
        }`}
        onClick={() => handleTabChange('achievements')}
      >
        Achievements
      </button>
      <button
        className={`py-2 px-4 rounded-lg w-full ${
          activeTab === 'experience' ? 'bg-red-400 text-white' : 'bg-transparent text-white'
        }`}
        onClick={() => handleTabChange('experience')}
      >
        Experience
      </button>
    </div>
  );
};

export default TabComponent;
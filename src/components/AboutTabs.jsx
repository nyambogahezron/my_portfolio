import EducationSection from './educationSection';
import ExperienceSection from './experienceSection';
import { useState } from 'react';
const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState('EducationTab');
  return (
    <div className='timeline-row'>
      <div>
        <div className='tabs'>
          <button
            className={`tab ${activeTab === 'EducationTab' ? 'active' : ''}`}
            onClick={() => setActiveTab('EducationTab')}
          >
            Education
          </button>
          <button
            className={`tab ${activeTab === 'experienceTab' ? 'active' : ''}`}
            onClick={() => setActiveTab('experienceTab')}
          >
            Experience
          </button>
        </div>
        <div className='content'>
          {activeTab === 'EducationTab' ? <EducationSection /> : <ExperienceSection />}
        </div>
      </div>
    </div>
  );
};
export default AboutTabs;

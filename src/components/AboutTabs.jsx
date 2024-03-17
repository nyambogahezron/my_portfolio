import EducationSection from './components/educationSection';
import ExperienceSection from './components/experienceSection';
import { useState } from 'react';
const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  return (
    <div className='timeline-row'>
      <div>
        <div className='tabs'>
          <button
            className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab1')}
          >
            Education
          </button>
          <button
            className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => setActiveTab('tab2')}
          >
            Experience
          </button>
        </div>
        <div className='content'>
          {activeTab === 'tab1' ? <EducationSection /> : <ExperienceSection />}
        </div>
      </div>
    </div>
  );
};
export default AboutTabs;

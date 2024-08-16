import EducationSection from './educationSection';
import ExperienceSection from './experienceSection';
import { useState } from 'react';
import styles from '../pages/About/index.module.css';

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState('EducationTab');
  return (
    <div className={styles.timelineRow}>
      <div>
        <div className={styles.tabs}>
          <button className={styles.tab}>Education</button>
        </div>
        <div className={styles.content}>
          <EducationSection />
        </div>
      </div>

      <div>
        <div className={styles.tabs}>
          <button className={styles.tab}>Experience</button>
        </div>
        <div className={styles.content}>
          <ExperienceSection />
        </div>
      </div>
    </div>
  );
};
export default AboutTabs;

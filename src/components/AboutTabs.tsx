import EducationSection from './educationSection';
import ExperienceSection from './experienceSection';
import styles from '@/components/pages/About/index.module.css';

const AboutTabs = () => {
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

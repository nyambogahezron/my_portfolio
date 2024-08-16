import { AboutLanguagesItems } from '@/Data';
import styles from '../pages/About/index.module.css';

const AboutSkills = () => {
  return (
    <div className={styles.skills}>
      <div className='row'>
        {AboutLanguagesItems.map((item) => {
          return (
            <div key={item.id} className={styles.skillItem}>
              <h5>{item.name}</h5>
              <div className={styles.progress}>
                <div
                  className={styles.progressIn}
                  style={{ width: item.percent }}
                ></div>
                <div className={styles.skillPercent}>{item.percent}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSkills;

import styles from '@/components/pages/About/index.module.css';
import { AboutItems } from '@data/index';

const AboutPersonalInfo = () => {
  return (
    <div className={styles.personalInfo}>
      <div className='row'>
        {AboutItems.map((item) => {
          return (
            <div key={item.id} className={styles.infoItem}>
              <p>
                {item.name} : <span> {item.item}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutPersonalInfo;

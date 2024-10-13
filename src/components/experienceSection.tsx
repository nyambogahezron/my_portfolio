import { educationItem } from '@data/index';
import styles from '../pages/About/index.module.css';

const ExperienceSection = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.row}>
        <div className={styles.timelineBbox}>
          <div className={styles.timeline}>
            {educationItem.map((item) => {
              const { date, title, body, id } = item;
              return (
                <div key={id} className={styles.timelineItem}>
                  <div className={styles.circleDot}></div>
                  <h3 className={styles.timelineDate}>
                    <i className={styles.fa}></i> {date}
                  </h3>
                  <h4 className={styles.timelineTitle}>{title}</h4>
                  <p className={styles.timelineText}>{body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;

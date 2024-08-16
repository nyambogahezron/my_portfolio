import { timelineItem } from '@/Data';
import styles from '../pages/About/index.module.css';

const EducationSection = () => {
  return (
    <div className={styles.education}>
      <div className='row'>
        <div className={styles.timelineBox}>
          <div className={styles.timeline}>
            {timelineItem.map((item) => {
              const { date, title, body, id } = item;
              return (
                <div key={id} className={styles.timelineItem}>
                  <div className={styles.circleDot}></div>
                  <h3 className={styles.timelineDate}>
                    <i className={styles.fafacalendar}></i> {date}
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

export default EducationSection;

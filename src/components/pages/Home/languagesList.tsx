import { languagesListData } from '../../../../data';
import styles from './index.module.css';

const LanguagesList: React.FC = () => {
  return (
    <div className={styles.languages}>
      <div className={styles.languagesList}>
        {languagesListData.map((item, index) => {
          const { name, Icon, id } = item;
          return (
            <span
              key={id}
              title={name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default LanguagesList;

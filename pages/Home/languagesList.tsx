import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaLaravel,
  FaPhp,
  FaReact,
  FaPython,
  FaDatabase,
  FaNodeJs,
} from 'react-icons/fa';

import styles from './index.module.css';

const languagesListData = [
  {
    id: 1,
    name: 'HTML',
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    name: 'CSS',
    icon: <FaCss3Alt />,
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: <FaJsSquare />,
  },
  {
    id: 4,
    name: 'Laravel',
    icon: <FaLaravel />,
  },
  {
    id: 5,
    name: 'PHP',
    icon: <FaPhp />,
  },
  {
    id: 6,
    name: 'React JS',
    icon: <FaReact />,
  },
  {
    id: 7,
    name: 'Django',
    icon: <FaPython />,
  },
  {
    id: 8,
    name: 'SQL',
    icon: <FaDatabase />,
  },
  {
    id: 9,
    name: 'MongoDB',
    icon: <FaNodeJs />,
  },
];

const LanguagesList = () => {
  return (
    <div className={styles.languages}>
      <div className={styles.languagesList}>
        {languagesListData.map(
          (
            item: { name: string; icon: JSX.Element; id: number },
            index: number
          ) => {
            const { name, icon, id } = item;
            return (
              <span
                key={id}
                title={name}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {icon}
              </span>
            );
          }
        )}
      </div>
    </div>
  );
};
export default LanguagesList;

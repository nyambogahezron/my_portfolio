import styles from './index.module.css';
import ThemeToggle from './ThemeToggle';

const TopNavbar = () => {
  return (
    <div className={styles.topNav}>
      <div className={styles.wrapper}>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default TopNavbar;

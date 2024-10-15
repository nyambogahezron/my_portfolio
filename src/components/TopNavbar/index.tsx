import styles from './index.module.css';
import ThemeToggle from './ThemeToggle';
import '@assets/css/globals.css';

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

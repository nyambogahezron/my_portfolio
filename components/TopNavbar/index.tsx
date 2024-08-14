import styles from './index.module.css';
import ThemeToggle from './ThemeToggle';

interface TopNavbarProps {
  SetOpenAsideNav: (open: boolean) => void;
  openAsideNav: boolean;
}

const TopNavbar: React.FC<TopNavbarProps> = ({
  SetOpenAsideNav,
  openAsideNav,
}) => {
  return (
    <div className={styles.topNav}>
      <div className={styles.wrapper}>
        <div className={styles.menuToggle}></div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default TopNavbar;

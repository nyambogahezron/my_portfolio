import { socialLinks } from '@/Data';
import styles from './index.module.css';

const SocialLinks = () => {
  return (
    <ul className={styles.socialLinks}>
      {socialLinks.map((link) => (
        <li key={link.platform}>
          <a href={link.href}>
            <link.Icon />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;

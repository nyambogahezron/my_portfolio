import SocialLinks from '@/components/SocialLinks';
import { FaEnvelope, FaGlobe, FaPhone } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';
import styles from './index.module.css';

const Contact = () => {
  return (
    <section className={`${styles.contact} section`} id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='section-title'>
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className={styles.contactTitle}>Have Any Question ?</h3>
        <h4 className={styles.contactSubTitle}>{`I'M AT YOUR SERVICES`}</h4>
        <div className={`${styles.contactSt} ${styles.row}`}>
          <div className={styles.contactInfoItem}>
            <div className={styles.icon}>
              <FaPhone />
            </div>
            <h4>Call, whatsApp</h4>
            <p>+254 794 5917 84</p>
          </div>
          <div className={styles.contactInfoItem}>
            <div className={styles.icon}>
              <FaGlobe />
            </div>
            <h4>Social Media</h4>
            <div>
              <SocialLinks />
            </div>
          </div>
          <div className={styles.contactInfoItem}>
            <div className={styles.icon}>
              <FaEnvelope />
            </div>
            <h4>Email</h4>
            <p>hezronnyamboga6@gmail.com</p>
          </div>
        </div>
        {/* contact form  */}
        <ContactForm />
      </div>
    </section>
  );
};
export default Contact;

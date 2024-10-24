'use client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputField from './inputField';
import { useState, FormEvent, ChangeEvent } from 'react';
import styles from '@/components/pages/Contact/index.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormData = { name, email, subject, message };

    if (!name || !email || !subject || !message) {
      toast.error('Please provide all fields');
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch(
        'https://send-mail-b2yq.onrender.com/api/sendmail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`An error has ocurred: ${response.status}`);
      }

      await response.json();
      // console.log(responseData)

      toast.success('Message sent successfully');
      // Reset form fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error: any) {
      toast.error('Error: ' + error.message);
    }
    setIsLoading(false);
  };

  return (
    <>
      <ToastContainer />

      <h3 className={styles.contactTitle}>SEND ME AN EMAIL</h3>
      <h4
        className={styles.contactSubTitle}
      >{`I'M VERY RESPONSIVE TO MESSAGES`}</h4>
     
      <div className={styles.form}>
        <form className={styles.sendMail} onSubmit={handleSubmit}>
          <div className={styles.contactForm}>
            <div className='row'>
              <InputField
                type='text'
                id='name'
                className='name'
                placeholder='Name'
                colSize='col6'
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
              <InputField
                type='email'
                id='email'
                className='email'
                placeholder='Email'
                colSize='col6'
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </div>
            <div className='row'>
              <InputField
                type='text'
                id='subject'
                className='subject'
                placeholder='Subject'
                colSize='col12'
                value={subject}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSubject(e.target.value)
                }
              />
            </div>
            <div className='row'>
              <div className={`${styles.formItem} col12`}>
                <div className='form-group'>
                  <textarea
                    name='message'
                    className={`${styles.formControl} message`}
                    id='message'
                    placeholder='Message'
                    value={message}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setMessage(e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
            <div className='row justify-center'>
              <div className={`${styles.formItem} ${styles.col12}`}>
                <button disabled={isLoading} className={`${isLoading? 'hover:cursor-not-allowed hover:animate-none' : ''}  btn ${styles.btn}  }`} type='submit'>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default ContactForm;

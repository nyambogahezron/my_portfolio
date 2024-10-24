import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
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
import {
  AboutItem,
  AboutLanguageItem,
  EducationItem,
  LanguageItem,
  Link,
  SocialLink,
  TimelineItem,
} from '../types';

export const socialLinks: SocialLink[] = [
  { platform: 'facebook', href: '#', Icon: FaFacebook },
  { platform: 'twitter', href: '#', Icon: FaTwitter },
  { platform: 'linkedin', href: '#', Icon: FaLinkedin },
  { platform: 'instagram', href: '#', Icon: FaInstagram },
  { platform: 'github', href: '#', Icon: FaGithub },
];

export const AboutItems: AboutItem[] = [
  { id: 1, name: 'Email', item: 'hezronnyamboga6@gmail.com' },
  { id: 2, name: 'Degree', item: 'CS' },
  { id: 3, name: 'Certifications', item: 'CCNA' },
  { id: 4, name: 'Phone', item: '+254 7945 917 84' },
  { id: 5, name: 'Freelance', item: 'Available' },
];

export const AboutLanguagesItems: AboutLanguageItem[] = [
  { id: 1, name: 'CSS', percent: '90%' },
  { id: 2, name: 'JS', percent: '87%' },
  { id: 3, name: 'NODE JS', percent: '90%' },
  { id: 4, name: 'PHP', percent: '80%' },
  { id: 5, name: 'HTML', percent: '96%' },
];

export const languagesListData: LanguageItem[] = [
  {
    id: 1,
    name: 'HTML',
    Icon: FaHtml5,
  },
  {
    id: 2,
    name: 'CSS',
    Icon: FaCss3Alt,
  },
  {
    id: 3,
    name: 'JavaScript',
    Icon: FaJsSquare,
  },
  {
    id: 4,
    name: 'Laravel',
    Icon: FaLaravel,
  },
  {
    id: 5,
    name: 'PHP',
    Icon: FaPhp,
  },
  {
    id: 6,
    name: 'React JS',
    Icon: FaReact,
  },
  {
    id: 7,
    name: 'Django',
    Icon: FaPython,
  },
  {
    id: 8,
    name: 'SQL',
    Icon: FaDatabase,
  },
  {
    id: 9,
    name: 'MongoDB',
    Icon: FaNodeJs,
  },
];

export const timelineItem: TimelineItem[] = [
  {
    id: 1,
    date: '2023 - 2024',
    title: 'Cisco Certified Network Associate',
    body: `My journey in Networking has been marked by a relentless pursuit
                of CCNA. Through which I learnt to configure routers to enable
                end-to-end connectivity between remote devices,Create IPv4 and
                IPv6 addressing schemes and verify network connectivity between
                devices and other useful skills in networking`,
  },
  {
    id: 2,
    date: '2021 - 2025',
    title: 'Bachelors of Science in Computer Science',
    body: `I hold a Bachelor's degree in Computer Science. This
                          program has provided me with a strong foundation in
                          key aspects of computing, including algorithms, data
                          structures, software engineering, and database
                          management. Throughout my academic journey, I have
                          gained both theoretical knowledge and practical
                          experience through hands-on projects, which have honed
                          my programming skills and developed my problem-solving
                          mindset`,
  },
];

export const educationItem: EducationItem[] = [
  {
    id: 1,
    date: '2023 - 2024',
    title: ' Web Application Development',
    body: `I bring a wealth of experience in Web Application
                             Development, having actively contributed to
                             numerous projects throughout my career. In my
                             roles, I have demonstrated proficiency in both
                             front-end and back-end development, ensuring the
                             delivery of robust and user-friendly applications.`,
  },
  {
    id: 2,
    date: '2021 - ',
    title: 'Problem-Solving and Collaboration',
    body: `Throughout my career,I have encountered and
                             overcome various challenges inherent in web
                             development projects.I thrive in collaborative
                             environments, working closely with cross-functional
                             teams to analyze requirements, devise solutions,
                             and deliver high-quality products.My commitment to
                             writing clean, maintainable code ensures the
                             longevity and adaptability of the applications I
                             contribute to.`,
  },
];

export const links: Link[] = [
  { name: 'home', label: 'Home', link: '/' },
  { name: 'about me', label: 'About Me', link: '/about' },
  { name: 'portfolio', label: 'Portfolio', link: '/projects' },
  { name: 'contact', label: 'Contact', link: '/#contact' },
  // { name: 'blogs', label: 'Blog', link: '/blogs' },
];

// export const portfolioItems: PortfolioItem[] = [
//   {
//     id: 1,
//     title: 'Delightful Restaurant',
//     github: 'https://github.com/nyambogahezron',
//     site: 'https://delightful-restaurant.vercel.app/',
//     img: '/images/res.png',
//     desc: `I spearheaded a dynamic restaurant project that seamlessly
//           blends technology with the culinary world to enhance the
//           dining experience. This innovative venture focuses on
//           digital menu management, online ordering, table reservation,
//           revolutionizing the way patrons interact with our
//           establishment.`,
//     category: 'Web',
//     stack: {
//       1: 'React',
//       2: 'Node',
//       3: 'Express',
//       4: 'MongoDB',
//     },
//     features: {
//       1: 'A wide range of products with real-time updates and availability.',
//       2: 'Intuitive design for easy navigation and a seamless shopping experience.',
//       3: 'Advanced search functionality with filters for category, price, and product type.',
//       4: 'Detailed product pages that include descriptions, images, and customer reviews.',
//       5: 'Add products to the cart with the option to adjust quantities before checkout.',
//       6: 'Multiple payment options, including PayPal, ensuring a safe transaction process.',
//       7: 'Real-time updates on order status, from processing to delivery.',
//       8: 'Optimized for both desktop and mobile devices, providing an excellent experience on any screen size.',
//     },
//   },
 
// ];

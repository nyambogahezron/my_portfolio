import { PortfolioItem } from '../types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Movie Trends',
    github: 'https://github.com/nyambogahezron',
    site: '',
    img: '/images/movie-box.png',
    desc: `The Movie Trends app is a user-friendly platform designed to help movie enthusiasts discover trending movies with ease. Built with Expo, the app allows users to search for movies, view detailed information, and explore the cast involved in each production. With a smooth and intuitive interface, users can stay updated with the latest movies in real time.`,
    category: 'Mobile',
    stack: {
      1: 'React Native',
      2: 'Expo',
      3: 'JavaScript',
      4: 'TypeScript',
      5: 'Nativewindcss / Tailwindcss',
    },
    features: {
      1: 'Trending Movies: Displays a list of the most popular and trending movies.',
      2: 'Movie Search: Allows users to search for specific movies by title.',
      3: 'Movie Details: Provides detailed information for each movie, including synopsis, genre, release date, and ratings.',
      4: 'Cast Information: Displays the main cast and crew of each movie, with biographies and roles.',
      5: 'Real-time Updates: Automatically updates with the latest trending movies.',
      6: 'Responsive Design: Works seamlessly across different screen sizes, ensuring a great user experience on both mobile and tablets.',
      7: 'Fast and Lightweight: Optimized performance to deliver quick results, even on slower connections.',
    },
    download: {
      playStore: 'https://play.google.com/store/apps/details?id=com.yourapp',
      appStore: 'https://apps.apple.com/app/idyourappid',
    },
  },
  {
    id: 2,
    title: 'Stock Market',
    github: 'https://github.com/nyambogahezron',
    site: 'https://stock-market-app-seven.vercel.app/',
    img: '/images/stock.png',
    desc: `This is a dynamic e-commerce application, a digital
                    marketplace designed to redefine the online shopping
                    experience. Seamlessly merging functionality with
                    user-friendly design, this platform offers a comprehensive
                    range of products and services, catering to the diverse
                    needs of our global clientele`,
    category: 'Web',
    stack: {
      1: 'React',
      2: 'Node',
      3: 'Express',
      4: 'MongoDB',
    },
    features: {
      1: 'A wide range of products with real-time updates and availability.',
      2: 'Intuitive design for easy navigation and a seamless shopping experience.',
      3: 'Advanced search functionality with filters for category, price, and product type.',
      4: 'Detailed product pages that include descriptions, images, and customer reviews.',
      5: 'Add products to the cart with the option to adjust quantities before checkout.',
      6: 'Multiple payment options, including PayPal, ensuring a safe transaction process.',
      7: 'Real-time updates on order status, from processing to delivery.',
      8: 'Optimized for both desktop and mobile devices, providing an excellent experience on any screen size.',
    },
  },
  {
    id: 3,
    title: 'Social Connect',
    github: 'https://github.com/nyambogahezron',
    site: 'https://social-theme.vercel.app/',
    img: '/images/social.png',
    desc: `This revolutionary social media application, a dynamic
                    platform designed to connect, engage, and inspire users
                    around the world. Our application redefines the social
                    networking experience, offering a range of features that
                    foster meaningful connections and creative expression.`,
    category: 'Web',
    stack: {
      1: 'React',
      2: 'Node',
      3: 'Express',
      4: 'MongoDB',
    },
    features: {
      1: 'A wide range of products with real-time updates and availability.',
      2: 'Intuitive design for easy navigation and a seamless shopping experience.',
      3: 'Advanced search functionality with filters for category, price, and product type.',
      4: 'Detailed product pages that include descriptions, images, and customer reviews.',
      5: 'Add products to the cart with the option to adjust quantities before checkout.',
      6: 'Multiple payment options, including PayPal, ensuring a safe transaction process.',
      7: 'Real-time updates on order status, from processing to delivery.',
      8: 'Optimized for both desktop and mobile devices, providing an excellent experience on any screen size.',
    },
  },
];

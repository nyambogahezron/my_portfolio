import  {  useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const portfolioItems = [
  {
    id: 1,
    title: 'Delightful Restaurant',
    github: 'https://github.com/nyambogahezron',
    site: 'https://delightful-restaurant.vercel.app/',
    img: '/images/res.PNG',
    desc: `I spearheaded a dynamic restaurant project that seamlessly
          blends technology with the culinary world to enhance the
          dining experience. This innovative venture focuses on
          digital menu management, online ordering, table reservation,
          revolutionizing the way patrons interact with our
          establishment.`,
  },
  {
    id: 2,
    title: 'Stock Market',
    github: 'https://github.com/nyambogahezron',
    site: 'https://stock-market-app-seven.vercel.app/',
    img: '/images/stock.PNG',
    desc: `This is a dynamic e-commerce application, a digital
                    marketplace designed to redefine the online shopping
                    experience. Seamlessly merging functionality with
                    user-friendly design, this platform offers a comprehensive
                    range of products and services, catering to the diverse
                    needs of our global clientele`,
  },
  {
    id: 3,
    title: 'Social Connect',
    github: 'https://github.com/nyambogahezron',
    site: 'https://social-theme.vercel.app/',
    img: '/images/social.PNG',
    desc: `This revolutionary social media application, a dynamic
                    platform designed to connect, engage, and inspire users
                    around the world. Our application redefines the social
                    networking experience, offering a range of features that
                    foster meaningful connections and creative expression.`,
  },
];

const Portfolio = () => {
  const [flipped, setFlipped] = useState([]);

  const flip = (id) => {
    setFlipped([...flipped, id]);
  };

  const unflip = (id) => {
    setFlipped(flipped.filter((item) => item !== id));
  };

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading">
            <h2>My Projects</h2>
          </div>
        </div>
        <div className="portfolioCard">
          {portfolioItems.map((item) => (
            <div className={`card ${flipped.includes(item.id) ? 'flipped' : ''}`} key={item.id}>
              <div className="card-front">
                <div className="image">
                  <a href={item.site} target="_blank" rel="noreferrer">
                    <img src={item.img} alt={item.title} />
                  </a>
                </div>
                <div className="front-info">
                  <h2>{item.title}</h2>
                  <hr />
                </div>
              </div>
              <div className="card-back">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
              <div className="action">
                {flipped.includes(item.id) ? (
                        <button onClick={() => unflip(item.id)}>Back</button>
                    ) : (
                        <button onClick={() => flip(item.id)}>More</button>
                    )}
                <div className="site">
                  <span>
                    <a title='View Source Code' href={item.github} target="_blank" rel="noreferrer">
                      <FaGithub />
                    </a>
                  </span>
                  <button className='site-live' title='View Site'>
                    <a href={item.site} target="_blank" rel="noreferrer">View Site</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
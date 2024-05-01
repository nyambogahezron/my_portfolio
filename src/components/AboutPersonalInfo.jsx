const AboutPersonalInfo = () => {
  return (
    <div className='personal-info'>
      <div className='row'>
        <div className='info-item'>
          <p>
            Email : <span>hezronnyamboga6@gmail.com</span>
          </p>
        </div>
        <div className='info-item'>
          <p>
            Degree : <span>CS</span>
          </p>
        </div>
        <div className='info-item'>
          <p>
            Certifications : <span>CCNA</span>
          </p>
        </div>
        <div className='info-item'>
          <p>
            Phone : <span>+254 7945 917 84</span>
          </p>
        </div>
        <div className='info-item'>
          <p>
            Location: <span>Nairobi, Kenya</span>
          </p>
        </div>
        <div className='info-item'>
          <p>
            Freelance : <span>Available</span>
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='buttons'>
          <a href='#contact' className='btn hire-me'>
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPersonalInfo;

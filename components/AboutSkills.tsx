const AboutSkills = () => {
  return (
    <div className='skills'>
      <div className='row'>
        <div className='skill-item'>
          <h5>CSS</h5>
          <div className='progress'>
            <div className='progress-in' style={{ width: '90%' }}></div>
            <div className='skill-percent'>90%</div>
          </div>
        </div>
        <div className='skill-item'>
          <h5>JS</h5>
          <div className='progress'>
            <div className='progress-in' style={{ width: '86%' }}></div>
            <div className='skill-percent'>86%</div>
          </div>
        </div>
        <div className='skill-item'>
          <h5>NODE JS</h5>
          <div className='progress'>
            <div className='progress-in' style={{ width: '90%' }}></div>
            <div className='skill-percent'>90%</div>
          </div>
        </div>
        <div className='skill-item'>
          <h5>PHP</h5>
          <div className='progress'>
            <div className='progress-in' style={{ width: '75%' }}></div>
            <div className='skill-percent'>75%</div>
          </div>
        </div>
        <div className='skill-item'>
          <h5>HTML</h5>
          <div className='progress'>
            <div className='progress-in' style={{ width: '96%' }}></div>
            <div className='skill-percent'>96%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkills;

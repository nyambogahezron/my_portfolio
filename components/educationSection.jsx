const EducationSection = () => {
  const timelineItem = [
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
  return (
    <div className='education'>
      <div className='row'>
        <div className='timeline-box'>
          <div className='timeline shadow-dark'>
            {timelineItem.map((item) => {
              const { date, title, body, id } = item;
              return (
                <div key={id} className='timeline-item'>
                  <div className='circle-dot'></div>
                  <h3 className='timeline-date'>
                    <i className='fa fa-calendar'></i> {date}
                  </h3>
                  <h4 className='timeline-title'>{title}</h4>
                  <p className='timeline-text'>{body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;

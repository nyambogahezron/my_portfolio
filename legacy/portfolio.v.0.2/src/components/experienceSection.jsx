const ExperienceSection = () => {
  const timelineItem = [
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
  return (
    <div className='experience'>
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

export default ExperienceSection;

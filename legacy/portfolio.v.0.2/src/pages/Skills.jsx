import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaPython, FaDatabase, FaServer } from 'react-icons/fa';

const skills = [
    {
        title: "Front End Web Development",
        icons: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />],
        description: "In front-end development, I excel in HTML, CSS, and JavaScript, crafting visually appealing and responsive user interfaces. Leveraging modern frameworks like React, I create dynamic single-page applications efficiently. My strength lies in translating design concepts into interactive experiences, ensuring seamless navigation for users."
    },
    {
        title: "Back-end Development",
        icons: [<FaNodeJs />, <FaPhp />, <FaPython />],
        description: "On the back-end, I have excelled in using technologies like Node.js, PHP, and Python to build the logic and functionality that power web applications. I have experience in designing and implementing RESTful APIs, ensuring effective communication between the front-end and back-end components. Additionally."
    },
    {
        title: "Databases",
        icons: [<FaDatabase />],
        description: "I have extensive experience with diverse database management systems, including MySQL, PostgreSQL, and MongoDB. This expertise enables me to tailor solutions to each project's specific needs. I specialize in database design, implementing efficient schemas to optimize data storage and retrieval."
    },
    {
        title: "RESTful APIS",
        icons: [<FaServer />],
        description: "I'm adept at designing, developing, and maintaining RESTful APIs, vital for modern web development. My focus is on creating scalable and efficient interfaces that ensure seamless communication between front-end and back-end components in web applications."
    }
];

const Skills = () => {
    return (
        <section className="service section" id="services">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Skills</h2>
                    </div>
                </div>
                <div className="service-row">
                    {skills.map((skill, index) => (
                        <div className="skills-card" key={index}>
                            <div className="skill-item-title">{skill.title}</div>
                            <div className="icon">
                                {skill.icons.map((Icon, i) => <span key={i}>{Icon}</span>)}
                            </div>
                            <div className="skill-item-description">
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;
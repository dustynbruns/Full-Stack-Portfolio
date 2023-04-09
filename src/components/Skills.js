import React from 'react';
import '../styles/Skills.css';
import skill1Logo from '../assets/bootsrap.jpeg';
import skill2Logo from '../assets/node.jpeg';
import skill3Logo from '../assets/React.png';

const Skills = () => {
    const skills = [
        { logo: skill1Logo, title: 'Bootstrap CSS' },
        { logo: skill2Logo, title: 'React' },
        { logo: skill3Logo, title: 'Node JS' },
        // Add more skills here
    ];

    return (
        <div className="skills-container">
            <h2 className='skills-title'>Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill" key={index}>
                        <img src={skill.logo} alt={skill.title} className="skill-logo" />
                        <p>{skill.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
import React from 'react';
import './styles/Skills.css';
import skill1Logo from 'path/to/skill1Logo';
import skill2Logo from 'path/to/skill2Logo';
import skill3Logo from 'path/to/skill3Logo';

const Skills = () => {
    const skills = [
        { logo: skill1Logo, title: 'Skill 1' },
        { logo: skill2Logo, title: 'Skill 2' },
        { logo: skill3Logo, title: 'Skill 3' },
        // Add more skills here
    ];

    return (
        <div className="skills-container">
            <h2>Skills</h2>
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
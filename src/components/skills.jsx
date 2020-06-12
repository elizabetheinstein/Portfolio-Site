import React from "react";

const Skills = () => {
    return (
        <div className="skills">
            <div className="inner-skills">
                <div className="skills-header">
                    <h3>Skills</h3>
                    <p>I learned to code at the Grace Hopper Program at Fullstack Academy in New York City. I'm excited to keep growing my skill set to become a more efficient developer.</p>
                </div>
                <div className="inner-text">
                    <div>
                        <h4>Languages</h4>
                        <div className="tech">
                            <p>JavaScript</p>
                            <p>TypeScript</p>
                            <p>Python</p>
                        </div>
                    </div>
                    <div>
                        <h4>Databases</h4>
                        <div className="tech">
                            <p>MongoDB</p>
                            <p>PostgreSQL</p>
                        </div>
                    </div>
                    <div>
                        <h4>Libraries and Frameworks</h4>
                        <div className="tech">
                            <p>Node.js</p>
                            <p>React</p>
                            <p>Redux</p>
                            <p>Apollo</p>
                        </div>
                    </div>
                    <div>
                        <h4>DevOps</h4>
                        <div className="tech">
                            <p>Git</p>
                            <p>Heroku</p>
                            <p>Travis CI</p>
                            <p>AWS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Skills;

import React from "react";

const Skills = () => {
    return (
        <div className="skills">
            <div className="skills-container">
                <div className="inner-skills">
                    <div className="skills-header">
                        <h3>Skills</h3>
                        <p>I learned to code at the Grace Hopper Program at Fullstack Academy in New York City. I'm excited to keep growing my skill set to become a more efficient developer.</p>
                    </div>
                    <div className="inner-text">
                        <div>
                            <h4>Frontend</h4>
                            <p>React</p>
                            <p>Redux</p>
                            <p>Webpack</p>
                        </div>
                        <div>
                            <h4>Backend</h4>
                            <p>Node.js</p>
                            <p>MongoDB</p>
                            <p>PostgreSQL</p>
                            <p>RESTful API</p>
                            <p>GraphQL</p>
                        </div>
                        <div>
                            <h4>DevOps</h4>
                            <p>Heroku</p>
                            <p>Travis CI</p>
                            <p>Git</p>
                        </div>
                        <div>
                            <h4>Additional</h4>
                            <p>Spanish (fluent)</p>
                            <p>Scrum/Agile</p>
                            <p>Project Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

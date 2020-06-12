import React from "react";
import Tech from "./tech";

const Skills = () => {
    return (
        <div className="skills">
            <div className="inner-skills">
                <div className="skills-header">
                    <h3>Skills</h3>
                    <p>I learned to code at the Grace Hopper Program at Fullstack Academy in New York City. I'm excited to keep growing my skill set to become a more efficient developer.</p>
                </div>
                <div className="inner-text">
                    <Tech />
                    {/* <div>
                        <h4>Languages</h4>
                        <div className="tech">
                            <p>JavaScript</p>
                            <p>TypeScript</p>
                            <p>Python</p>
                            <p>HTML5</p>
                            <p>CSS3</p>
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
                            <p>Express</p>
                            <p>React</p>
                            <p>React-Redux</p>
                            <p>Apollo</p>
                            <p>Socket.io</p>
                            <p>Gatsby</p>
                        </div>
                    </div>
                    <div>
                        <h4>DevOps</h4>
                        <div className="tech">
                            <p>Git</p>
                            <p>Github</p>
                            <p>Heroku</p>
                            <p>Netlify</p>
                            <p>AWS</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div >
    );
};

export default Skills;

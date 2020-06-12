import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../styles/projects.scss";

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            lalalime: file(relativePath: { eq: "lalalime.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            hive: file(relativePath: { eq: "hive.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <div id="projects">
            <div className="inner-text">
                <div className="content">
                    <h3> Projects </h3>
                    <div className="projects-grid">
                        <div className="lalalime">
                            <a href="http://lalalime.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <Img fluid={data.lalalime.childImageSharp.fluid} />
                            </a>

                            <p>
                                <span>LaLaLime</span>: An e-commerce site that sells women's leggings. Built using
                                    JavaScript, Node, Express, Sequelize, PostgreSQL, React, Redux, Stripe API, Heroku,
                                    Travis CI
                                </p>
                            <a
                                href="https://github.com/1911-GH-GraceShopper-LaLaLime/LaLaLime"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                                </a>
                        </div>
                        <div className="hive">
                            <a href="http://hivebymlln.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                <Img fluid={data.hive.childImageSharp.fluid} />
                            </a>
                            <p>
                                <span>Hive</span>: A collaborative whiteboard with integrated chat. Built using
                                    TypeScript, Node, Express, TypeORM, PostgreSQL, React, Redux, Fabric.js, Socket.io,
                                    Heroku
                                </p>
                            <a href="https://github.com/themlln/hive" target="_blank" rel="noopener noreferrer">
                                Github
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Projects;

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

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
            <div className="container">
                <div className="inner-text">
                    <div className="content">
                        <h3> Projects </h3>
                        <div className="projects-grid">
                            <div className="lalalime">
                                <Img fluid={data.lalalime.childImageSharp.fluid} />
                                <p>
                                    An e-commerce site that sells women's leggings. Built using JavaScript, Node,
                                    Express, Sequelize, PostgreSQL, React, Redux, Stripe API, Heroku, Travis CI
                                </p>
                            </div>
                            <div className="hive">
                                <Img fluid={data.hive.childImageSharp.fluid} />
                                <p>
                                    A collaborative whiteboard with integrated chat. Built using TypeScript, Node,
                                    Express, TypeORM, PostgreSQL, React, Redux, Fabric.js, Socket.io, Heroku
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;

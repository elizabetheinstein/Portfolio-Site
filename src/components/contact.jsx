import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Contact = () => {
    const data = useStaticQuery(graphql`
        query {
            linkedin: file(relativePath: { eq: "linkedin.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            github: file(relativePath: { eq: "github.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <div id="contact">
            <div className="container">
                <div className="inner-text">
                    <div className="content">
                        <h3>Contact</h3>
                        <div className="links">
                            <a href="/einstein-resume-2020.pdf" download="/einstein-resume-2020.pdf">
                                Resume
                            </a>
                            <a
                                href="https://www.linkedin.com/in/elizabeth-einstein"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <div className="logo">
                                <Img fluid={data.linkedin.childImageSharp.fluid} />
                            </div>
                            <a
                                href="https://www.github.com/elizabetheinstein"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                            <div className="logo">
                                <Img fluid={data.github.childImageSharp.fluid} />
                            </div>
                        </div>
                        <div className="contact-form">
                            <p>Form placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

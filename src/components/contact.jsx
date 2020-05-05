import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import ContactForm from './contact-form'

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
                    <h3>Contact</h3>
                    <div className="content">
                        <div className="resume">
                            <a
                                href="/eeinstein_resume.pdf"
                                download="/eeinstein_resume.pdf"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </div>
                        <div className="logo-container">
                            <a
                                href="https://www.linkedin.com/in/elizabeth-einstein"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="logo">
                                    <Img fluid={data.linkedin.childImageSharp.fluid} />
                                </div>
                            </a>
                            <a
                                href="https://www.github.com/elizabetheinstein"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="logo">
                                    <Img fluid={data.github.childImageSharp.fluid} />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="contact-form">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

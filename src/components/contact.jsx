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
                        <a href="/einstein-resume-2020.pdf" download="/einstein-resume-2020.pdf">
                            Download my Resume
                        </a>
                    </div>
                    <div className="logos">
                        <div className="linkedin">
                            <a href="https://www.linkedin.com/in/elizabeth-einstein" target="_blank">
                                <Img fluid={data.linkedin.childImageSharp.fluid} />
                            </a>
                        </div>
                        <div className="github">
                            <a href="https://www.github.com/elizabetheinstein" target="_blank">
                                <Img fluid={data.github.childImageSharp.fluid} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

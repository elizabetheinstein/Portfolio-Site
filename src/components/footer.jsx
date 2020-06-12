import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../styles/footer.scss";

const Footer = () => {
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
        <div id="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="logo-container">
                        <div className="logo-grid">
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
                    <div className="copyright">
                        <p>© Elizabeth Einstein 2020</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
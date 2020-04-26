import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const About = () => {
    const data = useStaticQuery(graphql`
        query {
            headshot: file(relativePath: { eq: "headshot.JPG" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            kikoModel: file(relativePath: { eq: "kiko-model.jpeg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <div id="about">
            <div className="container">
                <div className="inner-text">
                    <div className="content">
                        <h3> About Me </h3>
                        <p>Hi I'm Liz.</p>
                    </div>
                    <div className="images">
                        <div className="top-right">
                            <Img fluid={data.headshot.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

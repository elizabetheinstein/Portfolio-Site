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
        }
    `);
    return (
        <div id="about">
            <div className="container">
                <div className="inner-text">
                    <div className="content">
                        <h3> About Me </h3>
                        <p>
                            Hi I'm Liz Einstein, and I'm a software engineer. I graduated from the Grace Hopper Program
                            and specialized in the NERDs stack. In my free time, I enjoy reading, walking my dog, and
                            learning new technologies and frameworks.
                        </p>
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

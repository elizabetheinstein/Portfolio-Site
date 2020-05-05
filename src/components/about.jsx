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
                            Hi I'm Liz, and I'm a Denver-based Full Stack Software Engineer. I'm a recent graduate of Columbia
                            University and the Grace Hopper Program at Fullstack Academy, where I studied fullstack
                            javascript with specialization in the NERDs stack. In my free time, I enjoy hiking with my
                            dog, reading about science and technology, and learning new languages and frameworks.
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

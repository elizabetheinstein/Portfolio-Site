import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Banner = () => {
    const data = useStaticQuery(graphql`
        query {
            mountains: file(relativePath: { eq: "mountains.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <div className="banner">
            <div className="banner-container">
                <div className="row">
                    <div className="main-text">Elizabeth Einstein</div>
                    <div className="main-image">
                        <Img fluid={data.mountains.childImageSharp.fluid} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

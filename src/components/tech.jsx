import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Tech = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "technologies"}}) {
                edges {
                    node {
                        relativePath
                        base
                        childImageSharp {
                            fluid {
                                aspectRatio
                                base64
                                sizes
                                src
                                srcSet
                            }
                        }
                    }
                }
            }
        }

    `);
    return (
        <div className="technologies">
            <div className="tech-container">
                <div className="row">
                    <div className="main-text">Elizabeth Einstein</div>
                    <div className="main-image">
                        {data.allFile.edges.map(({ node }) => (
                            <Img fluid={node.childImageSharp.fluid} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tech;
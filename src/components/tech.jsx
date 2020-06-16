import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Tech = () => {
    const { allFile } = useStaticQuery(graphql`
    {
        allFile(sort: {fields: name, order: ASC}, filter: {relativePath: {regex: "/(tech)/"}}) {
            edges {
                node {
                    name
                    id
                    relativePath
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
    `);

    const { edges } = allFile;

    const languages = edges.filter((edge) => (/languages/).test(edge.node.relativePath));
    const libraries = edges.filter((edge) => (/libraries/).test(edge.node.relativePath));
    const db = edges.filter((edge) => (/db/).test(edge.node.relativePath));
    const devops = edges.filter((edge) => (/devops/).test(edge.node.relativePath));

    return (
        <div className="tech">
            <div className="inner-tech">
                <div className="tech-header">
                    <h3>Technologies</h3>
                </div>
                <div className="inner-text">
                    <div className="section-head">
                        <h4>Languages</h4>
                        <div className="tech-list">
                            {languages.map(edge =>
                                <div className="logo-container">
                                    <Img key={edge.node.id} fluid={edge.node.childImageSharp.fluid} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="section-head">
                        <h4>Libraries and Frameworks</h4>
                        <div className="tech-list">
                            {libraries.map(edge =>
                                <div className="logo-container">
                                    <Img key={edge.node.id} fluid={edge.node.childImageSharp.fluid} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="section-head">
                        <h4>Databases</h4>
                        <div className="tech-list">
                            {db.map(edge =>
                                <div className="logo-container">
                                    <Img key={edge.node.id} fluid={edge.node.childImageSharp.fluid} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="section-head">
                        <h4>DevOps</h4>
                        <div className="tech-list">
                            {devops.map(edge =>
                                <div className="logo-container">
                                    <Img key={edge.node.id} fluid={edge.node.childImageSharp.fluid} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tech;
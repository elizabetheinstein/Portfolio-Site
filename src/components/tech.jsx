import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { Img } from "gatsby-image"

const Tech = () => {
    const data = useStaticQuery(graphql`
    {
      languages: allFile(filter: {relativePath: {regex: "/(languages)/"}}) {
        edges {
            node {
                name
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
      }
      libraries: allFile(filter: {relativePath: {regex: "/(libraries)/"}}) {
        edges {
            node {
                name
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
      }
      db: allFile(filter: {relativePath: {regex: "/(db)/"}}) {
        edges {
            node {
                name
                relativePath
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
      }
      devops: allFile(filter: {relativePath: {regex: "/(devops)/"}}) {
        edges {
            node {
                name
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

    const languages = data.languages.edges;
    const libraries = data.libraries.edges;
    const db = data.db.edges;
    const devops = data.devops.edges;

    console.log("Lang", languages, "Lib", libraries, "db", db, "dev", devops)


    return (
        <div className="technologies">
            <div className="tech-container">
                <div className="row">
                    <div>
                        <h4>Languages</h4>
                        <div className="tech-list">
                            {languages.map(node =>
                                <Img fluid={node.childImageSharp.fluid} />
                            )}
                        </div>
                    </div>
                    <div>
                        <h4>Libraries and Frameworks</h4>
                        <div className="tech-list">
                            {libraries.map(node =>
                                <Img fluid={node.childImageSharp.fluid} />
                            )}
                        </div>
                    </div>
                    <div>
                        <h4>Databases</h4>
                        <div className="tech-list">
                            {db.map(node =>
                                <Img fluid={node.childImageSharp.fluid} />
                            )}
                        </div>
                    </div>
                    <div>
                        <h4>DevOps</h4>
                        <div className="tech-list">
                            {devops.map(node =>
                                <Img fluid={node.childImageSharp.fluid} />
                            )}
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Tech;
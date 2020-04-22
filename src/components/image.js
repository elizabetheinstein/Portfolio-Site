import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = () => {
  const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            kikoModel: file(relativePath: { eq: "kiko-model.jpeg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            headshot: file(relativePath: { eq: "headshot.JPG" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

  return (
    <div className="row">
      <div className="side-image left">
          <Img fluid={data.kikoModel.childImageSharp.fluid} />
      </div>
      <div className="main-text">
          Liz Einstein
      </div>
      <div className="main-image">
          <Img fluid={data.headshot.childImageSharp.fluid} />
      </div>
      <div className="side-image right">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default Image

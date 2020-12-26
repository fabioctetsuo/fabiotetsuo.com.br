import * as React from "react"
import { graphql } from "gatsby"
import Home from "../containers/Home"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allMdx.edges
  const { description } = data.site.siteMetadata
  return (
    <Layout>
      <SEO title="Homepage" description={description} />
      <Home posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            date(locale: "en", formatString: "MMMM Do YYYY")
            description
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage

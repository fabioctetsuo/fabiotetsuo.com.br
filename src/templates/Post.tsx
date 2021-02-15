import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Hidden from "@material-ui/core/Hidden"
import Button from "@material-ui/core/Button"
import { graphql } from "gatsby"

import Grid from "@material-ui/core/Grid"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img, { FluidObject, GatsbyImageFixedProps } from "gatsby-image"
import { navigate } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SectionTable from "../components/Post/SectionTable"
import ShareArticle from "../components/Post/Share"
import AuthorDetails from "../components/Post/AuthorDetails"
import * as S from "../modules/BlogPost/styled"
import theme from "../components/config"

const formatTitleId = (title: string) => title.replace(/ /g, "-").toLowerCase()

const style = {
  margin: "40px 0 16px 0",
}

const blockQuoteStyle = {
  borderLeft: `5px solid ${theme.palette.primary.main}`,
  paddingLeft: 16,
  margin: "24px 0",
}

const globalComponents = {
  h1: (props: any) => (
    <Typography variant="h1" {...props} color="textPrimary" style={style} />
  ),
  h2: (props: any) => (
    <Typography variant="h2" {...props} color="textPrimary" style={style} />
  ),
  h3: (props: any) => (
    <Typography variant="h3" {...props} color="textPrimary" style={style} />
  ),
  h4: (props: any) => (
    <Typography variant="h4" {...props} color="textPrimary" style={style} />
  ),
  h5: (props: any) => (
    <Typography
      {...props}
      variant="h5"
      id={formatTitleId(props.children)}
      color="textPrimary"
      style={style}
    />
  ),
  h6: (props: any) => (
    <Typography variant="h6" {...props} color="textPrimary" style={style} />
  ),
  p: (props: any) => (
    <Typography
      variant="body1"
      {...props}
      style={{ fontSize: "20px", lineHeight: "2.5rem", fontWeight: 300 }}
      color="textPrimary"
    />
  ),
  a: (props: any) => <S.Anchor {...props} target="_blank" />,
  li: (props: any) => (
    <li {...props}>
      <Typography
        variant="subtitle1"
        color="textPrimary"
        {...props}
        style={{ lineHeight: "2.5rem", fontWeight: 200 }}
      />
    </li>
  ),
  code: (props: any) => <code {...props} style={{ fontFamily: "Open Sans" }} />,
  blockquote: (props: any) => <blockquote {...props} style={blockQuoteStyle} />,
  strong: (props: any) => <strong {...props} style={{ fontWeight: "bold" }} />,
}

type SectionProps = {
  id: string
  title: string
}

type PostTemplateProps = {
  data: {
    mdx: {
      frontmatter: {
        featuredImage: {
          childImageSharp: {
            fluid: FluidObject
          }
        }
        title: string
        description: string
        sections: SectionProps[]
      }
      body: string
    }
    file: {
      childImageSharp: GatsbyImageFixedProps
    }
  }
  location: {
    href: string
  }
}

const PostTemplate = ({ data: { mdx, file }, location }: PostTemplateProps) => {
  const featuredImgFluid = mdx.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        image={featuredImgFluid.src}
      />
      <Container maxWidth="md">
        <Button variant="text" onClick={() => navigate("/blog")}>
          Voltar
        </Button>
        <S.TitleWrapper>
          <Typography variant="h4">{mdx.frontmatter.title}</Typography>
        </S.TitleWrapper>
        <S.FeaturedImageWrapper>
          <Img fluid={featuredImgFluid} />
        </S.FeaturedImageWrapper>
        <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
          {mdx.frontmatter.description}
        </Typography>
        <Grid container style={{ margin: "48px 0" }}>
          <Hidden xsDown>
            <Grid item xs={3}>
              <SectionTable sections={mdx.frontmatter.sections} />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={9}>
            <MDXProvider components={globalComponents}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
            <ShareArticle
              link={location.href}
              title={mdx.frontmatter.title}
              description={mdx.frontmatter.description}
            />
            <AuthorDetails profilePhoto={file.childImageSharp.fixed} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostTemplateQuery($id: String) {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        date(locale: "en", fromNow: true)
        title
        description
        sections {
          id
          title
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1914) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default PostTemplate

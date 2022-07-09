import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import getTitleFromSlug from "../utilities/getTitleFromSlug"

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        fields {
          slug
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { site, allMarkdownRemark } = data
  const siteTitle = site.siteMetadata.title

  const { nodes } = allMarkdownRemark
  const listItems = nodes.map(node => {
    const { slug } = node.fields
    const title = getTitleFromSlug(slug)

    return (
      <li key={slug}>
        <Link to={slug}>{title}</Link>
      </li>
    )
  })

  return (
    <Layout isTop>
      <Seo title={siteTitle} />
      <h1>{siteTitle}</h1>
      <ul>{listItems}</ul>
    </Layout>
  )
}

export default IndexPage

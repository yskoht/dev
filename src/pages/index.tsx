import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import getTitleFromSlug from "../utilities/getTitleFromSlug"

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: fields___slug, order: [DESC] }) {
      nodes {
        fields {
          slug
          heads
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
    const { slug, heads } = node.fields
    const title = getTitleFromSlug(slug)

    return (
      <li key={slug}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to={slug} style={{ flexGrow: 0, flexShrink: 0 }}>
            {title}
          </Link>
          <div style={{ fontSize: "9px", display: "flex", marginLeft: 8 }}>
            {heads.map(head => (
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  marginRight: 8,
                  padding: "2px 8px",
                  maxWidth: 200,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {head}
              </div>
            ))}
          </div>
        </div>
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

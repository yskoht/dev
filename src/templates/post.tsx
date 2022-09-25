import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import getTitleFromSlug from "../utilities/getTitleFromSlug"

export default function Post({ data, pageContext }) {
  const { markdownRemark } = data
  const { html, fields } = markdownRemark
  const { slug } = fields
  const { prevSlug, nextSlug } = pageContext
  const title = getTitleFromSlug(slug)

  return (
    <Layout>
      <Seo title={title} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <Link
          to={prevSlug}
          style={{ visibility: prevSlug ? "visible" : "hidden" }}
        >
          Prev
        </Link>
        <Link
          to={nextSlug}
          style={{ visibility: nextSlug ? "visible" : "hidden" }}
        >
          Next
        </Link>
      </div>

      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}
export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      # frontmatter {
      #   title
      # }
    }
  }
`

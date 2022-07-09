import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import getTitleFromSlug from "../utilities/getTitleFromSlug"

export default function Post({ data }) {
  const { markdownRemark } = data
  const { html, fields } = markdownRemark
  const { slug } = fields
  const title = getTitleFromSlug(slug)

  return (
    <Layout>
      <Seo title={title} />

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

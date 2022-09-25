const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, trailingSlash: false })
    createNodeField({
      name: "slug",
      node,
      value: slug,
    })

    const heads = node.rawMarkdownBody.match(/#(\s+)(.+):(.+)\n\n/g)
    if (heads) {
      createNodeField({
        name: "heads",
        node,
        value: heads.map(head => head.replace(/#(?:\s+)(.+:.+)\n\n/, "$1")),
      })
    }
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: fields___slug, order: [DESC] }) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  const { nodes } = result.data.allMarkdownRemark
  nodes.forEach((node, i) => {
    const { slug } = node.fields
    const nextSlug = i > 0 ? nodes[i - 1].fields.slug : null
    const prevSlug = i < nodes.length - 1 ? nodes[i + 1].fields.slug : null

    createPage({
      path: slug,
      component: require.resolve("./src/templates/post.tsx"),
      context: {
        slug,
        prevSlug,
        nextSlug,
      },
    })
  })
}

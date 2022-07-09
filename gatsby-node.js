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
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach(node => {
    const { slug } = node.fields

    createPage({
      path: slug,
      component: require.resolve("./src/templates/using-dsg.tsx"),
      context: {
        slug,
      },
      defer: true,
    })
  })
}

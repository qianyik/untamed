/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = ({ actions: { createPage } }) => {
  const novels = require("./data/untamedV1.json")

  novels.forEach(chapter => {
    createPage({
      path: `/untamed/${chapter.id}/`,
      component: require.resolve("./src/templates/novel.js"),
      context: {
        title: chapter.title,
        content: chapter.content,
        id: chapter.id,
      },
    })
  })
}

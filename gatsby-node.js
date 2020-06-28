const path = require(`path`)

exports.createPages = ({ actions: { createPage } }) => {
  /**
   *  Version 1, Orginal
   */
  const v1 = require("./data/untamedV1.json")

  v1.forEach(chapter => {
    createPage({
      path: `/untamed/v1/${chapter.id}/`,
      component: require.resolve("./src/templates/novel.js"),
      context: {
        title: chapter.title,
        content: chapter.content,
        id: chapter.id,
        prefix: "untamed/v1",
        total: v1.length,
      },
    })
  })

  createPage({
    path: `/untamed/v1/catalog/`,
    component: require.resolve("./src/templates/catalog.js"),
    context: {
      list: v1.map(item => item.title),
      id: v1.map(item => item.id),
      prefix: "untamed/v1",
      title: "魔道先祖 V1",
    },
  })

  /**
   *  Version 2
   */
  const v2 = require("./data/untamedV2.json")

  v2.forEach(chapter => {
    createPage({
      path: `/untamed/v2/${chapter.id}/`,
      component: require.resolve("./src/templates/novel.js"),
      context: {
        title: chapter.title,
        content: chapter.content,
        id: chapter.id,
        prefix: "untamed/v2",
        total: v2.length,
      },
    })
  })

  // Catalog page for V2
  createPage({
    path: `/untamed/v2/catalog/`,
    component: require.resolve("./src/templates/catalog.js"),
    context: {
      list: v2.map(item => item.title),
      id: v2.map(item => item.id),
      prefix: "untamed/v2",
      title: "魔道先祖 V2",
    },
  })

  /**
   * Version 3
   */
  const v3 = require("./data/untamedV3_taiwan.json")

  v3.forEach(chapter => {
    createPage({
      path: `/untamed/v3/${chapter.id}/`,
      component: require.resolve("./src/templates/novel.js"),
      context: {
        title: chapter.title,
        content: chapter.content,
        id: chapter.id,
        prefix: "untamed/v3",
        total: v3.length,
      },
    })
  })

  // Catalog page for V2
  createPage({
    path: `/untamed/v3/catalog/`,
    component: require.resolve("./src/templates/catalog.js"),
    context: {
      list: v3.map(item => item.title),
      id: v3.map(item => item.id),
      prefix: "untamed/v3",
      title: "魔道先祖 V3",
    },
  })
}

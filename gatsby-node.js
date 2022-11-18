import * as untamedV1 from "./data/untamedV1.json";
import * as v1_taiwan from "./data/untamedV1_taiwan.json";
import * as v2 from "./data/untamedV2.json";
import * as v3 from "./data/untamedV3_taiwan.json";
import * as lostinlove from "./data/lost-love-in-time.json";

exports.createPages = async ({ actions }) => {
  const {createPage} = actions;
  /**
   *  Version 1, Orginal
   */
  untamedv1.forEach(chapter => {
    createPage({
      path: `/untamed/v1/${chapter.id}/`,
      component: require.resolve("./src/templates/novel.js"),
      context: {
        title: chapter.title,
        content: chapter.content,
        id: chapter.id,
        prefix: "untamed/v1",
        total: untamedv1.length,
      },
    })
  })

  createPage({
    path: `/untamed/v1/catalog/`,
    component: require.resolve("./src/templates/catalog.js"),
    context: {
      list: untamedv1.map(item => item.title),
      id: untamedv1.map(item => item.id),
      prefix: "untamed/v1",
      title: "魔道先祖 V1",
    },
  })

  /**
   *  Version 1, Taiwan
   */
  v1_taiwan.forEach(chapter => {
    createPage({
      path: `/untamed/v1/t/${chapter.id}/`,
      component: require.resolve("./src/templates/novel.js"),
      context: {
        title: chapter.title,
        content: chapter.content,
        id: chapter.id,
        prefix: "untamed/v1/t",
        total: v1_taiwan.length,
      },
    })
  })

  // Catalog page for V1 Taiwan
  createPage({
    path: `/untamed/v1/t/catalog/`,
    component: require.resolve("./src/templates/catalog.js"),
    context: {
      list: v1_taiwan.map(item => item.title),
      id: v1_taiwan.map(item => item.id),
      prefix: "untamed/v1/t",
      title: "魔道先祖 V1 台湾",
    },
  })

  /**
   *  Version 2
   */
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
   * Version 3, Taiwan
   */
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

  // Lost in love
  createPage({
    path: `/lostinlove/catalog/`,
    component: require.resolve("./src/templates/catalog.js"),
    context: {
      list: lostinlove.map(item => item.title),
      id: lostinlove.map(item => item.id),
      prefix: "lostinlove",
      title: "醉玲珑",
    },
  })

  lostinlove.forEach(chapter => {
    createPage({
      path: `/lostinlove/${chapter.id}/`,
      component: require.resolve("./src/templates/novel.js"),
      context: {
        title: chapter.title,
        content: chapter.content,
        id: chapter.id,
        prefix: "lostinlove",
        total: lostinlove.length,
      },
    })
  })
}

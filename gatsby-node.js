// gatsby-node.js
const path = require("path")

// createPages даёт доступ к graphql и некоторым методам gatsby (actions)
exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    // получить все markdown-записи
    const {
        data: {
            allMdx: { edges: news },
        },
    } = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
              lang
              category
            }
          }
        }
      }
    }
  `)

    // для каждой записи создать страницу
    news.forEach(({ node }) => {
        const { slug, lang, category } = node.frontmatter
        const template = (category === 'news') ? "./src/templates/news.js" : "./src/templates/webinar.js"

        return createPage({
            // путь к странице
            path: `${lang}/${category}/${slug}`,
            // шаблон страницы
            component: require.resolve(template),
            // контекст, который попадёт в шаблон
            // может быть использован для дальнейших манипуляций с данными
            context: { slug },
        })
    })
}
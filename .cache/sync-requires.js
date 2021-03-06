const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/anna/Develop/gatsby-starter-blog-oekraine/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/anna/Develop/gatsby-starter-blog-oekraine/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/anna/Develop/gatsby-starter-blog-oekraine/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/anna/Develop/gatsby-starter-blog-oekraine/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/anna/Develop/gatsby-starter-blog-oekraine/src/templates/blog-post.js")))
}


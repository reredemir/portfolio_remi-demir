const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("S:\\03- DEV\\portfolioGatsby-remi-demir\\retro\\node_modules\\gatsby-plugin-offline\\app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("S:\\03- DEV\\portfolioGatsby-remi-demir\\retro\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("S:\\03- DEV\\portfolioGatsby-remi-demir\\retro\\src\\pages\\index.js")))
}


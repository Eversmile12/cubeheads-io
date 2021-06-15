const sitemap = require("nextjs-sitemap-generator")
const path = require("path")


sitemap({
    baseUrl: "http://localhost:3000/",
    pagesDirectory: path.resolve(__dirname, "../pages/"),
    targetDirectory: path.resolve(__dirname, "../"),
    ignoredExtensions: ["js", "map", "json", "xml", "png", "css", "jpg", "jpeg", "icon"  ],
    ignoredPaths: ["404", "index"],
    extraPaths: ["/"]

})
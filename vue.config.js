// init

module.exports = {
  publicPath: "./",
  indexPath: "index.html",
  filenameHashing: true,
  outputDir: process.env.NODE_ENV === "test" ? "dist-test" : "dist",
  devServer: {
    port: 8080,
    open: true,
    https: false,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
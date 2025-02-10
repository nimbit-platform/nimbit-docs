console.log("🔧 Custom Webpack Config Loaded!");

module.exports = {
  devtool: false, // Verhindert eval() durch eval-source-map
  optimization: {
    minimize: true, // Verkleinert das Bundle
  },
};

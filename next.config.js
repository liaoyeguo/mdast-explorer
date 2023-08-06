const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');


module.exports = {
    webpack: (
        /** @type {import('next').NextConfig} */
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
      if(!isServer){
        config.plugins.push(new MonacoWebpackPlugin({
          filename:"./static/[name].worker.js",
          languages:['markdown']}))
      }
      return config
    },
  }

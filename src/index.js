import path from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import webpackConfigBase from 'rehy-webpack-config'
import WebpackDevServer from 'webpack-dev-server'

export async function serve({ projectDir }) {
  const entry = path.resolve(projectDir, 'entry.js')
  const contentBase = path.resolve(projectDir, 'dist')
  const webpackConfig = webpackConfigBase.merge({
    entry,
    plugins: [
      new HtmlWebpackPlugin(),
    ],
    output: {
      path: contentBase,
    },
    devServer: {
      contentBase,
    },
  })
  const compiler = webpack(webpackConfig)
  const server = new WebpackDevServer(compiler, webpackConfig.devServer)
  server.listen(8080)
}

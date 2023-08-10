import HtmlWebpackPlugin from 'html-webpack-plugin'
import type webpack from 'webpack'
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin
} from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins (
  options: BuildOptions
): webpack.WebpackPluginInstance[] {
  const { path, isDev } = options

  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),

    new HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ]
}

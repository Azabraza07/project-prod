import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack, { ProgressPlugin } from "webpack";
import { BuildPaths } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(
  path: BuildPaths
): webpack.WebpackPluginInstance[] {
  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
}

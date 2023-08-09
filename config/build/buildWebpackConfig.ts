import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolve } from "./buildResolve";
import { BuildOptions } from "./types/config";
import path from "path";
import webpack from "webpack";
import { buildWebpackServe } from "./buildWebpackServe";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, path, isDev } = options;
  return {
    mode: mode,
    entry: path.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: path.build,
      clean: true,
    },
    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolve(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildWebpackServe(options) : undefined,
  };
}

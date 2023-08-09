import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfig } from "webpack-dev-server";

export function buildWebpackServe(options: BuildOptions): DevServerConfig {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}

export type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  path: BuildPaths;
  isDev: Boolean;
  port: number;
}

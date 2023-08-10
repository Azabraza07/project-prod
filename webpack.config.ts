import path from 'path'
import type webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const mode = env.mode || 'development'
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const PORT = env.port || 3000

  const isDev = mode === 'development'

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    path: paths,
    port: PORT,
    isDev
  })

  return config
}

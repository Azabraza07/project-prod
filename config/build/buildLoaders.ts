import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'
import { type BuildOptions } from './types/config'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack']
  }
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: options.isDev
              ? '[path][name]__[local]'
              : '[hash:base64:5]'
          }
        }
      },
      'sass-loader'
    ]
  }
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  return [fileLoader, svgLoader, tsLoader, scssLoader]
}

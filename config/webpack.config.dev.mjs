import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const __dirname = dirname(fileURLToPath(import.meta.url))
export default function (envParams, { mode = 'development' } = {}) {
  return {
    mode,
    module: {
      rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(__dirname, '../', 'public', 'index.html')
      }),
    ],
    devServer: {
      publicPath: envParams.CONTEXT_PATH,
      contentBase: resolve(__dirname, '..', 'public'),
      overlay: {
        warnings: false,
        errors: true
      },
      inline: true,
      historyApiFallback: {
        rewrites: [{
          from: new RegExp(`^${envParams.CONTEXT_PATH}`),
          to: envParams.CONTEXT_PATH
        }]
      }
    }
  }
}

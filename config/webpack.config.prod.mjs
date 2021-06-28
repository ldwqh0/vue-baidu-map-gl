import path from 'path'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default function (envParams, { mode = 'production' }) {
  return {
    mode,
    module: {
      rules: [{
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }, {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      }]
    },
    optimization: {
      minimize: false,
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            type: 'css/mini-extract',
            chunks: 'all',
            enforce: true,
          }
        }
      },
      minimizer: ['...', new CssMinimizerPlugin()],
    },
    externals: {
      vue: 'vue'
    },
    plugins: [
      new CleanWebpackPlugin()
    ],
    target: ['es5'],
    output: {
      library: {
        type: 'umd'
      },
      path: path.resolve(__dirname, '..', 'dist'),
    }
  }
}

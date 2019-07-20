import path from 'path'
import config, { minifyPlugins } from './webpack.demo.babel'

export default {
  ...config,
  entry: './src/componets/PlayerContainer',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'PlayerContainer.js',
    library: 'PlayerContainer',
    libraryExport: 'default'
  },
  externals: {
    'react': 'React'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: minifyPlugins
}

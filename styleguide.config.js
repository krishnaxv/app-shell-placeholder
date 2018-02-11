module.exports = {
  components: 'src/**/[A-Z]*.js',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: [
                'transform-object-rest-spread',
                'transform-class-properties'
              ],
              presets: ['env', 'react']
            }
          }
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        }
      ]
    }
  }
};

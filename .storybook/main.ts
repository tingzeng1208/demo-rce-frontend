const path = require('path');

const webpackConfig = (config) => {
  config.resolve.alias.uswds = path.resolve(__dirname, '../node_modules/uswds')

  // config.module.rules = config.module.rules.filter(
  //   (rule) => rule.test.toString() !== '/\\.css$/'
  // )
  config.module.rules.push({
    test: /\.(sa|sc|c)ss$/,
    exclude: /\.module\.(sa|sc|c)ss$/i,
    // use: ['style-loader', 'css-loader', 'sass-loader'],
    use: ['sass-loader'],
    include: path.resolve(__dirname, '../'),
  })

  config.module.rules.push({
    test: /\.module\.(sa|sc|c)ss$/i,
    include: path.resolve(__dirname, '../src'),
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        },
      },
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: ['./src/RCE.scss'],
        },
      },
    ],
  })
}



module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  // webpackFinal: async (config) => {
  //   return webpackConfig(config)
  // },
  "framework": "@storybook/react"
}
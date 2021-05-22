const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

// You need to manually add all the directories that contain stories
const stories = ['pages', 'components', 'tests']
  .map((value) => [`../${value}/**/*.stories.mdx`, `../${value}/**/*.stories.@(js|jsx|ts|tsx)`])
  .flat()

module.exports = {
  stories,
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    'storybook-css-modules-preset',
  ],
  webpackFinal: (config) => {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ]

    const rules = config.module.rules
    const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/

    rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.tsx?$/,
      },
      use: ['@svgr/webpack'],
    })

    return config
  },
}

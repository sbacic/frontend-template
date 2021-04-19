const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

// You need to manually add all the directories that contain stories
const stories = ['pages', 'components']
  .map((value) => [`../${value}/**/*.stories.mdx`, `../${value}/**/*.stories.@(js|jsx|ts|tsx)`])
  .flat()

module.exports = {
  stories,
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',
    '@storybook/addon-addon-a11y',
    '@storybook/addon-backgrounds',
  ],
  webpackFinal: (config) => {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ]

    return config
  },
}

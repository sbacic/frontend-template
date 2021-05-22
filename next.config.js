module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.tsx?$/,
      },
      use: ['@svgr/webpack'],
    })

    return config
  },
}

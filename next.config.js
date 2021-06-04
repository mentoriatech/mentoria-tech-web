module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  async rewrites() {
    return [
      {
        source: '/api/server/:path*',
        destination: 'http://localhost:2107/api/v1/:path*',
      },
    ]
  },
}

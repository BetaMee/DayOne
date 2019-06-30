module.exports = [
  // 对本地 node_modules 的支持
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    }
  },
  {
    enforce: "pre",
    test: /\.js$/,
    use: "source-map-loader"
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|.webpack)/,
    use: [
      {
        loader: 'awesome-typescript-loader'
      }
    ]
   }
];

const path = require('path')

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
   },
   {
     test: /\.scss$/i,
     exclude: path.resolve(__dirname, '../src/assets/styles'),
     use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-modules-typescript-loader'
        },
        {
          loader: 'css-loader', // CSS加载器
          options: {
              modules: true,
              // localsConvention: 'camelCase'
          }
        },
        {
            loader: 'sass-loader'
        }
      ],
   },
   {
    test: /\.scss$/i,
    include: path.resolve(__dirname, '../src/assets/styles'),
    use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-modules-typescript-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }
     ],
  }
];
